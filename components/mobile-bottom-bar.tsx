'use client'

import { ShoppingBag, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-3 md:hidden">
      <div className="flex gap-3">
        {/* GLORIAFOOD_ORDER_WIDGET */}
        <Button 
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Order
        </Button>
        {/* GLORIAFOOD_RESERVATION_WIDGET */}
        <Button 
          variant="outline"
          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          size="lg"
        >
          <CalendarDays className="mr-2 h-5 w-5" />
          Reserve
        </Button>
      </div>
    </div>
  )
}
