'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface ShopInfo {
  shopName: string
  city: string
  phone: string
}

const DEFAULTS: ShopInfo = {
  shopName: 'Your Business Name',
  city: 'Your City',
  phone: 'Your Phone Number',
}

const STORAGE_KEYS = {
  shopName: 'shop',
  city: 'city',
  phone: 'phone',
}

export function useShopInfo(): ShopInfo {
  const searchParams = useSearchParams()
  const [shopInfo, setShopInfo] = useState<ShopInfo>(DEFAULTS)

  useEffect(() => {
    // Read from URL params first, then sessionStorage, then defaults
    const shopFromUrl = searchParams.get('shop')
    const cityFromUrl = searchParams.get('city')
    const phoneFromUrl = searchParams.get('phone')

    const shopFromStorage = sessionStorage.getItem(STORAGE_KEYS.shopName)
    const cityFromStorage = sessionStorage.getItem(STORAGE_KEYS.city)
    const phoneFromStorage = sessionStorage.getItem(STORAGE_KEYS.phone)

    const shopName = shopFromUrl || shopFromStorage || DEFAULTS.shopName
    const city = cityFromUrl || cityFromStorage || DEFAULTS.city
    const phone = phoneFromUrl || phoneFromStorage || DEFAULTS.phone

    // Write to sessionStorage for persistence
    if (shopFromUrl) sessionStorage.setItem(STORAGE_KEYS.shopName, shopFromUrl)
    if (cityFromUrl) sessionStorage.setItem(STORAGE_KEYS.city, cityFromUrl)
    if (phoneFromUrl) sessionStorage.setItem(STORAGE_KEYS.phone, phoneFromUrl)

    setShopInfo({ shopName, city, phone })
  }, [searchParams])

  return shopInfo
}

// Helper to build URLs with preserved params
export function useParamLink() {
  const searchParams = useSearchParams()
  
  return (path: string) => {
    const params = new URLSearchParams()
    const shop = searchParams.get('shop')
    const city = searchParams.get('city')
    const phone = searchParams.get('phone')
    
    if (shop) params.set('shop', shop)
    if (city) params.set('city', city)
    if (phone) params.set('phone', phone)
    
    const queryString = params.toString()
    return queryString ? `${path}?${queryString}` : path
  }
}
