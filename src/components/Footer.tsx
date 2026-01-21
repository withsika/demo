export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              Demo store powered by
            </span>
            <a 
              href="https://withsika.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Sika
            </a>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>This is a demo.</span>
            <span className="text-amber-600 font-medium">No real payments are processed.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
