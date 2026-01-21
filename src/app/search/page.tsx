'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ProductCard } from '@/components/ProductCard'
import { searchProducts } from '@/lib/products'

type SortType = 'relevance' | 'price-asc' | 'price-desc' | 'rating'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [sort, setSort] = useState<SortType>('relevance')

  const results = useMemo(() => {
    if (!query.trim()) return []
    
    const products = searchProducts(query)
    
    // Apply sorting
    switch (sort) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0))
      case 'relevance':
      default:
        return products
    }
  }, [query, sort])

  if (!query.trim()) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <svg 
            className="w-16 h-16 mx-auto text-gray-300 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Search Products</h1>
          <p className="text-gray-500 mb-8">
            Enter a search term to find products
          </p>
          <Link
            href="/collections"
            className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors inline-block"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <nav className="flex mb-4">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">Search</li>
          </ol>
        </nav>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Search results for &quot;{query}&quot;
        </h1>
        <p className="text-gray-500">
          {results.length} {results.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {results.length > 0 ? (
        <>
          {/* Sort Bar */}
          <div className="flex items-center justify-end gap-2 mb-6">
            <span className="text-sm text-gray-700 font-medium">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortType)}
              className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <svg 
            className="w-16 h-16 mx-auto text-gray-300 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No results found</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            We couldn&apos;t find any products matching &quot;{query}&quot;. 
            Try different keywords or browse our collections.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/collections"
              className="px-6 py-2.5 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
            >
              Browse All Products
            </Link>
            <Link
              href="/"
              className="px-6 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}

      {/* Search Tips */}
      {results.length === 0 && (
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-3">Search tips:</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Try more general terms (e.g., &quot;dress&quot; instead of &quot;blue ankara maxi dress&quot;)
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Check your spelling
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Try searching by category: ankara, kente, jewelry, home decor
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}
