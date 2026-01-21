# Sika Checkout Demo

A demo e-commerce store showcasing the Sika payment integration. This example demonstrates how to integrate Sika's checkout flow into a Next.js application.

## Live Demo

- **Demo Store**: [demo.withsika.com](https://demo.withsika.com)
- **Checkout (Staging)**: [pay.staging.withsika.com](https://pay.staging.withsika.com)

## Features

- 🛍️ Product listing with "Buy Now" buttons
- 💳 Sika checkout integration
- ✅ Success page after payment
- ❌ Cancel page for abandoned checkouts
- 🔒 Server-side checkout initialization (API key never exposed to client)

## How It Works

1. **Customer clicks "Buy Now"** → Frontend calls `/api/checkout`
2. **Server initializes checkout** → Calls Sika API with secret key
3. **Redirect to Sika** → Customer is sent to `pay.withsika.com`
4. **Payment complete** → Customer returns to success/cancel URL

## Getting Started

### Prerequisites

- Node.js 18+
- A Sika account with API credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/withsika/demo.git
cd demo

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### Configuration

Edit `.env.local` with your Sika credentials:

```env
# Sika API (use staging for testing)
SIKA_API_URL=https://api.staging.withsika.com
SIKA_SECRET_KEY=sika_test_sk_your_secret_key

# Your app's public URL (for redirects)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo store.

## Integration Code

### Server-side: Initialize Checkout

```typescript
// src/lib/sika.ts
const response = await fetch('https://api.withsika.com/checkout/initialize', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${SIKA_SECRET_KEY}`,
  },
  body: JSON.stringify({
    email: 'customer@example.com',
    amount: 15000, // Amount in cents (GHS 150.00)
    description: 'Premium Headphones',
    success_url: 'https://yoursite.com/success?reference={reference}',
    cancel_url: 'https://yoursite.com/cancel',
  }),
})

const { checkout_url } = await response.json()
```

### Client-side: Redirect to Checkout

```typescript
// Redirect customer to Sika checkout
window.location.href = checkout_url
```

### Handle Success

```typescript
// src/app/checkout/success/page.tsx
export default function SuccessPage({ searchParams }) {
  const { reference } = searchParams
  // reference contains the payment reference
  // You can use this to verify the payment status via webhook or API
}
```

## Project Structure

```
src/
├── app/
│   ├── api/checkout/       # API route to initialize checkout
│   ├── checkout/
│   │   ├── success/        # Success page after payment
│   │   └── cancel/         # Cancel page for abandoned checkouts
│   ├── layout.tsx          # Root layout with header/footer
│   └── page.tsx            # Home page with product grid
├── components/
│   ├── ProductCard.tsx     # Product card with Buy Now button
│   ├── Header.tsx          # Site header
│   └── Footer.tsx          # Site footer
└── lib/
    ├── products.ts         # Product data
    └── sika.ts             # Sika API client
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/withsika/demo&env=SIKA_API_URL,SIKA_SECRET_KEY,NEXT_PUBLIC_BASE_URL)

### Environment Variables

Set these in your deployment platform:

| Variable | Description | Example |
|----------|-------------|---------|
| `SIKA_API_URL` | Sika API endpoint | `https://api.withsika.com` |
| `SIKA_SECRET_KEY` | Your Sika secret key | `sika_live_sk_...` |
| `NEXT_PUBLIC_BASE_URL` | Your app's public URL | `https://yoursite.com` |

## Resources

- [Sika Documentation](https://docs.withsika.com)
- [Sika Dashboard](https://dashboard.withsika.com)
- [API Reference](https://api.withsika.com/docs)

## License

MIT
