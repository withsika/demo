import Link from 'next/link'

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string }>
}) {
  return (
    <SuccessContent searchParams={searchParams} />
  )
}

async function SuccessContent({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string }>
}) {
  const { reference } = await searchParams

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg mx-auto px-4 py-16">
        {/* Success Animation */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
          <svg
            className="w-10 h-10 text-green-600 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Your payment was successful and your order has been confirmed. 
          We&apos;ll send you a confirmation email shortly.
        </p>

        {reference && (
          <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8 inline-block">
            <p className="text-sm text-gray-500 mb-1">Order Reference</p>
            <code className="text-lg font-mono font-semibold text-gray-900">{reference}</code>
          </div>
        )}

        {/* What's Next */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 text-left">
          <h2 className="font-semibold text-gray-900 mb-4">What happens next?</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Order Confirmation</p>
                <p className="text-sm text-gray-500">You&apos;ll receive an email with your order details</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Preparation</p>
                <p className="text-sm text-gray-500">Our artisans will prepare your items with care</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Shipping</p>
                <p className="text-sm text-gray-500">Your order will be shipped within 2-3 business days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/collections"
            className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* Demo Notice */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            This is a demo store. No real order was placed.
          </p>
        </div>
      </div>
    </div>
  )
}
