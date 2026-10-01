const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8" },
});

const stripeRequest = async (env, path, params, method = "POST") => {
  const response = await fetch(`https://api.stripe.com/v1${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${env.STRIPE_RESTRICTED_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: method === "GET" ? undefined : new URLSearchParams(params),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || `Stripe API error: ${response.status}`);
  }
  return data;
};

const requireAdmin = (request, env) => {
  const supplied = request.headers.get("authorization") || "";
  if (!env.ZENTO_ADMIN_TOKEN || supplied !== `Bearer ${env.ZENTO_ADMIN_TOKEN}`) {
    return json({ error: "Unauthorized" }, 401);
  }
  return null;
};

const createPayment = async (request, env) => {
  const authError = requireAdmin(request, env);
  if (authError) return authError;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const {
    storeName,
    websiteAmount,
    maintenanceAmount,
    currency = "jpy",
  } = body;

  if (!storeName || !Number.isInteger(websiteAmount) || websiteAmount <= 0) {
    return json({ error: "storeName and a positive integer websiteAmount are required" }, 400);
  }

  try {
    const websiteProduct = await stripeRequest(env, "/products", {
      name: `${storeName}｜ホームページ制作費`,
      metadata: JSON.stringify({ zento_store_name: storeName, zento_type: "website_creation" }),
    });

    const websitePrice = await stripeRequest(env, "/prices", {
      product: websiteProduct.id,
      unit_amount: String(websiteAmount),
      currency,
      metadata: JSON.stringify({ zento_store_name: storeName, zento_type: "website_creation" }),
    });

    const websiteLink = await stripeRequest(env, "/payment_links", {
      "line_items[0][price]": websitePrice.id,
      "line_items[0][quantity]": "1",
      "metadata[zento_store_name]": storeName,
      "metadata[zento_type]": "website_creation",
    });

    let maintenance = null;
    if (Number.isInteger(maintenanceAmount) && maintenanceAmount > 0) {
      const maintenanceProduct = await stripeRequest(env, "/products", {
        name: `${storeName}｜ホームページ保守・管理費`,
        metadata: JSON.stringify({ zento_store_name: storeName, zento_type: "maintenance" }),
      });

      const maintenancePrice = await stripeRequest(env, "/prices", {
        product: maintenanceProduct.id,
        unit_amount: String(maintenanceAmount),
        currency,
        "recurring[interval]": "month",
        metadata: JSON.stringify({ zento_store_name: storeName, zento_type: "maintenance" }),
      });

      const maintenanceLink = await stripeRequest(env, "/payment_links", {
        "line_items[0][price]": maintenancePrice.id,
        "line_items[0][quantity]": "1",
        "metadata[zento_store_name]": storeName,
        "metadata[zento_type]": "maintenance",
      });

      maintenance = {
        productId: maintenanceProduct.id,
        priceId: maintenancePrice.id,
        paymentLink: maintenanceLink.url,
      };
    }

    return json({
      ok: true,
      storeName,
      website: {
        productId: websiteProduct.id,
        priceId: websitePrice.id,
        paymentLink: websiteLink.url,
      },
      maintenance,
    });
  } catch (error) {
    return json({ error: error.message || "Stripe operation failed" }, 502);
  }
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/stripe/create-store-payment" && request.method === "POST") {
      return createPayment(request, env);
    }

    if (url.pathname === "/api/stripe/health" && request.method === "GET") {
      return json({ ok: true, stripeConfigured: Boolean(env.STRIPE_RESTRICTED_KEY) });
    }

    return env.ASSETS.fetch(request);
  },
};
