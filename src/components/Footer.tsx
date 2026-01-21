import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">
                Mali<span className="text-amber-500">ka</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Celebrating African heritage through authentic fashion and lifestyle products, 
              handcrafted by skilled artisans across the continent.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/collections" className="text-sm hover:text-amber-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections/women" className="text-sm hover:text-amber-500 transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/collections/men" className="text-sm hover:text-amber-500 transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/collections/accessories" className="text-sm hover:text-amber-500 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/collections/home" className="text-sm hover:text-amber-500 transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link href="/collections?filter=new" className="text-sm hover:text-amber-500 transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm hover:text-amber-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm hover:text-amber-500 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm hover:text-amber-500 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-amber-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-sm hover:text-amber-500 transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-sm hover:text-amber-500 transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              About Malika
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-amber-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/artisans" className="text-sm hover:text-amber-500 transition-colors">
                  Our Artisans
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm hover:text-amber-500 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm hover:text-amber-500 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-amber-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Secure payments powered by
            </p>
            <div className="flex items-center gap-3">
              {/* Visa */}
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <svg className="h-3" viewBox="0 0 50 16" fill="none">
                  <path d="M19.5 1L17 15H14L16.5 1H19.5Z" fill="#1A1F71"/>
                  <path d="M32 1L26.5 15H23.5L21 3.5C21 3 20.5 2.5 20 2.5C19 2 17.5 1.5 16 1L16.5 1H24.5C25.5 1 26 1.5 26.5 2.5L28 10L32 1Z" fill="#1A1F71"/>
                  <path d="M42.5 10.5C42.5 7 39 6.5 39 5C39 4.5 39.5 4 40.5 4C41.5 4 42.5 4.5 43 4.5L43.5 2C43 1.5 41.5 1 40 1C37 1 35 2.5 35 5C35 7 37 8 38 8.5C39 9 39.5 9.5 39.5 10C39.5 11 38.5 11 38 11C36.5 11 35 10.5 34.5 10L34 12.5C35 13 36.5 13.5 38 13.5C41 13.5 43 11.5 42.5 10.5Z" fill="#1A1F71"/>
                  <path d="M50 1H47.5C46.5 1 46 1.5 45.5 2L40 15H43.5L44 13.5H48L48.5 15H51.5L50 1ZM45 11L46.5 6L47.5 11H45Z" fill="#1A1F71"/>
                  <path d="M11 1L6 10.5L5.5 8C4.5 5.5 2 2.5 0 1.5L3 15H6.5L14.5 1H11Z" fill="#1A1F71"/>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <svg className="h-4" viewBox="0 0 32 20" fill="none">
                  <circle cx="11" cy="10" r="9" fill="#EB001B"/>
                  <circle cx="21" cy="10" r="9" fill="#F79E1B"/>
                  <path d="M16 3C17.8 4.5 19 6.6 19 10C19 13.4 17.8 15.5 16 17C14.2 15.5 13 13.4 13 10C13 6.6 14.2 4.5 16 3Z" fill="#FF5F00"/>
                </svg>
              </div>
              {/* Mobile Money */}
              <div className="w-10 h-6 bg-yellow-400 rounded flex items-center justify-center">
                <svg className="h-3.5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">
              <p className="text-gray-500">
                © 2026 Malika. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-400">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-400">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Demo Badge */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                Test Mode
              </span>
              <p className="text-sm text-gray-500">
                Demo powered by{' '}
                <a 
                  href="https://withsika.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-amber-500 hover:text-amber-400"
                >
                  Sika
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
