import { NextRequest, NextResponse } from 'next/server'
import { initializeCheckout } from '@/lib/sika'
import { getProduct } from '@/lib/products'

interface CartItem {
  productId: string
  quantity: number
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, email } = body as { items: CartItem[], email: string }

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      )
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Calculate total and build description
    let totalAmount = 0
    const productNames: string[] = []

    for (const item of items) {
      const product = getProduct(item.productId)
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.productId}` },
          { status: 404 }
        )
      }
      totalAmount += product.price * item.quantity
      productNames.push(`${product.name}${item.quantity > 1 ? ` (x${item.quantity})` : ''}`)
    }

    // Get base URL for redirects
    const baseUrl = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    // Build description (truncate if too long)
    let description = productNames.join(', ')
    if (description.length > 100) {
      description = `${items.length} items from Sika Store`
    }

    // Initialize Sika checkout
    const checkout = await initializeCheckout({
      email,
      amount: totalAmount,
      description,
      metadata: {
        item_count: String(items.length),
        product_ids: items.map(i => i.productId).join(','),
      },
      success_url: `${baseUrl}/checkout/success?reference={reference}`,
      cancel_url: `${baseUrl}/checkout/cancel?reference={reference}`,
    })

    return NextResponse.json(checkout)
  } catch (error) {
    console.error('Checkout API error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout' },
      { status: 500 }
    )
  }
}
