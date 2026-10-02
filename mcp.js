const jsonRpc = (id, result) => new Response(JSON.stringify({ jsonrpc: "2.0", id, result }), { headers: { "content-type": "application/json; charset=utf-8" } });
const jsonRpcError = (id, code, message) => new Response(JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } }), { status: 400, headers: { "content-type": "application/json; charset=utf-8" } });

const tools = [
  {
    name: "zento_stripe_health",
    title: "ZENTO Stripe health check",
    description: "Read-only check of whether ZENTO has its Stripe restricted key configured. Never exposes the key.",
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: true },
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "zento_create_store_payment",
    title: "ZENTO create store payment links",
    description: "Creates a live Stripe product, price, and Payment Link for a ZENTO store. Only call after the user explicitly confirms the store and amounts.",
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: true },
    inputSchema: {
      type: "object",
      properties: {
        storeName: { type: "string" },
        websiteAmount: { type: "integer", minimum: 1 },
        maintenanceAmount: { type: "integer", minimum: 1 },
        currency: { type: "string", enum: ["jpy"] },
      },
      required: ["storeName", "websiteAmount"],
    },
  },
];

export async function handleMcp(request, env, createPayment) {
  const supplied = request.headers.get("authorization") || "";
  if (!env.ZENTO_MCP_TOKEN || supplied !== `Bearer ${env.ZENTO_MCP_TOKEN}`) {
    return jsonRpcError(null, -32001, "Unauthorized");
  }

  let message;
  try { message = await request.json(); } catch { return jsonRpcError(null, -32700, "Parse error"); }
  const id = message.id ?? null;

  if (message.method === "initialize") {
    return jsonRpc(id, {
      protocolVersion: "2025-06-18",
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "zento-mcp", version: "1.0.0" },
    });
  }
  if (message.method === "notifications/initialized") return new Response(null, { status: 202 });
  if (message.method === "tools/list") return jsonRpc(id, { tools });
  if (message.method !== "tools/call") return jsonRpcError(id, -32601, `Unknown method: ${message.method}`);

  const name = message.params?.name;
  const args = message.params?.arguments || {};
  if (name === "zento_stripe_health") {
    return jsonRpc(id, { content: [{ type: "text", text: JSON.stringify({ ok: true, stripeConfigured: Boolean(env.STRIPE_RESTRICTED_KEY) }) }], isError: false });
  }
  if (name === "zento_create_store_payment") {
    const response = await createPayment(args, env);
    const result = await response.json();
    return jsonRpc(id, { content: [{ type: "text", text: JSON.stringify(result) }], isError: !response.ok });
  }
  return jsonRpcError(id, -32601, `Unknown tool: ${name}`);
}
