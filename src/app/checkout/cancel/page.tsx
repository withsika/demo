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
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-gray-600"
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-6">
          Your payment was cancelled. No charges were made.
        </p>
        {reference && (
          <p className="text-sm text-gray-500 mb-6">
            Reference: <code className="bg-gray-100 px-2 py-1 rounded">{reference}</code>
          </p>
        )}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Return to Store
        </Link>
      </div>
    </div>
  )
}
