/**
 * Simple cart state management using localStorage
 */

import { Product } from './products'

export interface CartItem {
  product: Product
  quantity: number
}

const CART_KEY = 'sika_demo_cart'

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  const cart = localStorage.getItem(CART_KEY)
  return cart ? JSON.parse(cart) : []
}

export function addToCart(product: Product): CartItem[] {
  const cart = getCart()
  const existingItem = cart.find(item => item.product.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ product, quantity: 1 })
  }
  
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  window.dispatchEvent(new Event('cart-updated'))
  return cart
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart().filter(item => item.product.id !== productId)
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  window.dispatchEvent(new Event('cart-updated'))
  return cart
}

export function updateQuantity(productId: string, quantity: number): CartItem[] {
  const cart = getCart()
  const item = cart.find(item => item.product.id === productId)
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId)
    }
    item.quantity = quantity
  }
  
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  window.dispatchEvent(new Event('cart-updated'))
  return cart
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY)
  window.dispatchEvent(new Event('cart-updated'))
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
}

export function getCartItemCount(cart: CartItem[]): number {
  return cart.reduce((count, item) => count + item.quantity, 0)
}
