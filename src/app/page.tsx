import { ProductCard } from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          Test Mode - No real payments
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sika Checkout Demo
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience seamless payments with Sika. Click &quot;Buy Now&quot; on any product 
          to see the checkout flow in action.
        </p>
      </div>

      {/* Integration Info */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-semibold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Initialize Checkout</h3>
              <p className="text-sm text-gray-500">Your server calls Sika API to create a checkout session</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-semibold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Redirect to Pay</h3>
              <p className="text-sm text-gray-500">Customer is redirected to the Sika checkout page</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-semibold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Handle Result</h3>
              <p className="text-sm text-gray-500">Customer returns to your success or cancel URL</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Code Example */}
      <div className="mt-16 bg-gray-900 rounded-xl p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Integration Code</h2>
          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">TypeScript</span>
        </div>
        <pre className="text-sm text-gray-300 overflow-x-auto">
          <code>{`// Initialize checkout on your server
const checkout = await fetch('https://api.withsika.com/checkout/initialize', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer sk_live_...',
  },
  body: JSON.stringify({
    email: 'customer@example.com',
    amount: 15000, // Amount in cents (GHS 150.00)
    description: 'Premium Headphones',
    success_url: 'https://yoursite.com/success?reference={reference}',
    cancel_url: 'https://yoursite.com/cancel',
  }),
})

const { checkout_url } = await checkout.json()

// Redirect customer to checkout
window.location.href = checkout_url`}</code>
        </pre>
      </div>
    </div>
  )
}
