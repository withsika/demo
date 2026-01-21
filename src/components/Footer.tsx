export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Demo store powered by{' '}
            <a 
              href="https://withsika.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              Sika
            </a>
          </p>
          <p className="text-sm text-amber-600 font-medium">
            Test mode — No real payments
          </p>
        </div>
      </div>
    </footer>
  )
}
