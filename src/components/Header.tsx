'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { getCart, getCartItemCount } from '@/lib/cart'
import { categories, searchProducts, Product } from '@/lib/products'

export function Header() {
  const router = useRouter()
  const [itemCount, setItemCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCount = () => {
      setItemCount(getCartItemCount(getCart()))
    }
    
    updateCount()
    window.addEventListener('cart-updated', updateCount)
    return () => window.removeEventListener('cart-updated', updateCount)
  }, [])

  useEffect(() => {
    if (searchQuery.length >= 2) {
      setSearchResults(searchProducts(searchQuery).slice(0, 5))
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
        setSearchQuery('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-amber-600 text-white text-center text-sm py-2 px-4">
        <p>🎉 Free shipping on orders over GH₵ 200 | Use code <span className="font-semibold">MALIKA10</span> for 10% off</p>
      </div>

      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl text-gray-900">Malika</span>
                <span className="hidden md:inline text-xs text-gray-500 block -mt-1">African Fashion</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-amber-600 font-medium transition-colors flex items-center gap-1">
                  Shop
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-3 min-w-[200px]">
                    <Link
                      href="/collections"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                    >
                      All Products
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/collections/${category.slug}`}
                        className="block px-5 py-2.5 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/collections/women" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Women
              </Link>
              <Link href="/collections/men" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Men
              </Link>
              <Link href="/collections/accessories" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Accessories
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Search"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                    <form onSubmit={handleSearch}>
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products..."
                          className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                          autoFocus
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                    {searchResults.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            onClick={() => {
                              setIsSearchOpen(false)
                              setSearchQuery('')
                            }}
                            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg"
                          >
                            <div className="w-10 h-10 bg-gray-100 rounded-lg" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{product.name}</p>
                              <p className="text-xs text-gray-500">{product.category}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-amber-600 text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg font-medium"
            >
              Home
            </Link>
            <Link
              href="/collections"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg font-medium"
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/collections/${category.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
