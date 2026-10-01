# ZENTO Stripe Worker setup

The Worker API is designed to keep the existing static ZENTO site while adding server-side Stripe operations.

## Secrets to add in Cloudflare

- `STRIPE_RESTRICTED_KEY`: the Stripe restricted live key created for ZENTO
- `ZENTO_ADMIN_TOKEN`: a long random bearer token used to protect the management endpoint

Do not commit either secret to GitHub.

## API

`POST /api/stripe/create-store-payment`

Example JSON:

```json
{
  "storeName": "Example Store",
  "websiteAmount": 150000,
  "maintenanceAmount": 5000,
  "currency": "jpy"
}
```

The endpoint creates the website product/price and a one-time Payment Link. If `maintenanceAmount` is supplied, it also creates a monthly recurring product/price and Payment Link.

Authentication uses:

`Authorization: Bearer <ZENTO_ADMIN_TOKEN>`

`GET /api/stripe/health` returns whether the Stripe secret is configured. It does not expose the secret.
