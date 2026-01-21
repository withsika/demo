'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product, formatPrice } from '@/lib/products'
import { addToCart } from '@/lib/cart'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  showQuickAdd?: boolean
}

function StarRating({ rating, reviewCount }: { rating: number; reviewCount?: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-200'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-gray-500">({reviewCount})</span>
      )}
    </div>
  )
}

export function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const [added, setAdded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price
  const discountPercent = isOnSale
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : 0

  return (
    <Link href={`/products/${product.id}`}>
      <div 
        className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="aspect-square relative bg-gray-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-2.5 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-sm">
                NEW
              </span>
            )}
            {product.isBestSeller && !product.isNew && (
              <span className="px-2.5 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full shadow-sm">
                BEST SELLER
              </span>
            )}
            {isOnSale && (
              <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-sm">
                -{discountPercent}%
              </span>
            )}
          </div>

          {/* Quick Add Button (on hover) */}
          {showQuickAdd && (
            <div 
              className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <button
                onClick={handleAddToCart}
                className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  added 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white text-gray-900 hover:bg-amber-500 hover:text-white'
                }`}
              >
                {added ? '✓ Added to Cart' : 'Quick Add'}
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-amber-600 font-medium uppercase tracking-wide mb-1">
            {product.category}
          </p>
          
          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          {product.rating && (
            <div className="mb-3">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className={`text-lg font-bold ${isOnSale ? 'text-red-600' : 'text-gray-900'}`}>
              {formatPrice(product.price)}
            </span>
            {isOnSale && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.compareAtPrice!)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

// Compact variant for grids with many items
export function ProductCardCompact({ product }: { product: Product }) {
  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group">
        <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden mb-3">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.isNew && (
            <span className="absolute top-2 left-2 px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded">
              NEW
            </span>
          )}
        </div>
        <h3 className="font-medium text-gray-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className={`font-semibold text-sm ${isOnSale ? 'text-red-600' : 'text-gray-900'}`}>
            {formatPrice(product.price)}
          </span>
          {isOnSale && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
