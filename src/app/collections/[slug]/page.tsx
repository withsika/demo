'use client'

import { useState, useMemo } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ProductCard } from '@/components/ProductCard'
import { 
  categories, 
  getProductsByCategory,
  getCategory
} from '@/lib/products'

type SortType = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating'

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [sort, setSort] = useState<SortType>('featured')

  const category = getCategory(slug)
  const categoryProducts = getProductsByCategory(slug)

  // If category not found, show 404
  if (!category) {
    notFound()
  }

  const sortedProducts = useMemo(() => {
    const result = [...categoryProducts]

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return result
  }, [categoryProducts, sort])

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900 py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/collections" className="hover:text-white">Collections</Link>
              </li>
              <li>/</li>
              <li className="text-white">{category.name}</li>
            </ol>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </div>

      {/* Category Quick Links */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8 overflow-x-auto py-4 -mb-px scrollbar-hide">
            <Link 
              href="/collections"
              className="text-gray-500 hover:text-gray-700 pb-4 text-sm font-medium whitespace-nowrap"
            >
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className={`pb-4 text-sm font-medium whitespace-nowrap ${
                  cat.slug === slug
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {sortedProducts.length} products
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 font-medium">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortType)}
              className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products in this category</h3>
            <p className="text-gray-500 mb-6">
              Check back soon for new arrivals.
            </p>
            <Link
              href="/collections"
              className="px-6 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors inline-block"
            >
              Browse All Products
            </Link>
          </div>
        )}

        {/* Other Categories */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {categories
              .filter((cat) => cat.slug !== slug)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/collections/${cat.slug}`}
                  className="group relative aspect-[16/9] rounded-xl overflow-hidden"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
                      <span className="text-sm text-amber-400 font-medium">Shop Now →</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
