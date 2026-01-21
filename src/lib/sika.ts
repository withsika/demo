/**
 * Sika API Client
 * 
 * Server-side client for initializing checkouts with the Sika API
 */

const SIKA_API_URL = process.env.SIKA_API_URL || 'https://api.staging.withsika.com'
const SIKA_SECRET_KEY = process.env.SIKA_SECRET_KEY

interface CheckoutInitResponse {
  checkout_url: string
  reference: string
  payment: {
    id: string
    reference: string
    status: string
    amount: { value: number; formatted: string }
    currency: { code: string; symbol: string }
  }
}

interface CheckoutInitParams {
  email: string
  amount: number
  description?: string
  metadata?: Record<string, string>
  success_url: string
  cancel_url: string
}

export async function initializeCheckout(params: CheckoutInitParams): Promise<CheckoutInitResponse> {
  if (!SIKA_SECRET_KEY) {
    throw new Error('SIKA_SECRET_KEY is not configured')
  }

  const response = await fetch(`${SIKA_API_URL}/checkout/initialize`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SIKA_SECRET_KEY}`,
    },
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to initialize checkout')
  }

  return response.json()
}
