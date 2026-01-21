import Link from 'next/link'

export default function CheckoutCancelPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string }>
}) {
  return (
    <CancelContent searchParams={searchParams} />
  )
}

async function CancelContent({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string }>
}) {
  const { reference } = await searchParams

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg mx-auto px-4 py-16">
        {/* Cancel Icon */}
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Your payment was not completed and no charges were made. 
          Your cart items are still saved if you&apos;d like to try again.
        </p>

        {reference && (
          <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8 inline-block">
            <p className="text-sm text-gray-500 mb-1">Reference</p>
            <code className="text-lg font-mono font-semibold text-gray-900">{reference}</code>
          </div>
        )}

        {/* Help Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 text-left">
          <h2 className="font-semibold text-gray-900 mb-4">Need help?</h2>
          <div className="space-y-3 text-sm">
            <p className="text-gray-600">
              If you experienced any issues during checkout, here are some things you can try:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ensure your payment details are entered correctly
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Check that your card hasn&apos;t expired
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Try a different payment method
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Contact your bank if the issue persists
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/cart"
            className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
          >
            Return to Cart
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
            This is a demo store. No real payment was attempted.
          </p>
        </div>
      </div>
    </div>
  )
}
