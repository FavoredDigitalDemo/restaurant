'use client'

import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const allergenKey = {
  GF: { label: 'Gluten-Free', color: 'bg-green-100 text-green-800' },
  V: { label: 'Vegetarian', color: 'bg-emerald-100 text-emerald-800' },
  VG: { label: 'Vegan', color: 'bg-lime-100 text-lime-800' },
  N: { label: 'Contains Nuts', color: 'bg-amber-100 text-amber-800' },
  D: { label: 'Dairy-Free', color: 'bg-blue-100 text-blue-800' },
}

type AllergenCode = keyof typeof allergenKey

interface MenuItem {
  name: string
  description: string
  price: string
  allergens: AllergenCode[]
  seasonal?: boolean
}

interface MenuCategory {
  name: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    name: 'Starters',
    items: [
      {
        name: 'Burrata Caprese',
        description: 'Fresh burrata cheese with heirloom tomatoes, basil pesto, and aged balsamic reduction. Served with grilled sourdough.',
        price: '$18',
        allergens: ['V', 'N'],
      },
      {
        name: 'Seared Scallops',
        description: 'Pan-seared diver scallops with cauliflower puree, crispy pancetta, and caper brown butter.',
        price: '$24',
        allergens: ['GF'],
      },
      {
        name: 'Roasted Beet Salad',
        description: 'Locally grown beets with whipped goat cheese, candied walnuts, arugula, and honey vinaigrette.',
        price: '$16',
        allergens: ['V', 'GF', 'N'],
      },
      {
        name: 'Soup of the Day',
        description: 'Chef\'s daily creation using the freshest seasonal ingredients. Ask your server for today\'s selection.',
        price: '$12',
        allergens: [],
        seasonal: true,
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh ahi tuna with avocado mousse, sesame-soy dressing, wonton crisps, and microgreens.',
        price: '$22',
        allergens: ['GF'],
      },
    ],
  },
  {
    name: 'Mains',
    items: [
      {
        name: 'Grilled Ribeye',
        description: 'Prime 14oz dry-aged ribeye with herb compound butter, roasted fingerling potatoes, and grilled asparagus.',
        price: '$52',
        allergens: ['GF'],
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Wild-caught salmon with citrus beurre blanc, quinoa pilaf, and charred broccolini.',
        price: '$38',
        allergens: ['GF'],
      },
      {
        name: 'Truffle Risotto',
        description: 'Creamy arborio rice with black truffle shavings, aged parmesan, and white truffle oil. Add protein for $12.',
        price: '$32',
        allergens: ['V', 'GF'],
      },
      {
        name: 'Braised Short Ribs',
        description: 'Slow-braised beef short ribs with red wine reduction, creamy polenta, and roasted root vegetables.',
        price: '$44',
        allergens: ['GF'],
      },
      {
        name: 'Herb-Crusted Lamb',
        description: 'New Zealand lamb rack with rosemary-mint crust, pomme puree, and seasonal vegetable medley.',
        price: '$48',
        allergens: ['GF'],
      },
      {
        name: 'Wild Mushroom Pasta',
        description: 'House-made pappardelle with wild mushroom ragout, truffle cream sauce, and fresh herbs.',
        price: '$28',
        allergens: ['V'],
        seasonal: true,
      },
      {
        name: 'Vegan Buddha Bowl',
        description: 'Roasted seasonal vegetables, quinoa, chickpeas, tahini dressing, and avocado.',
        price: '$24',
        allergens: ['VG', 'GF', 'N'],
      },
    ],
  },
  {
    name: 'Sides',
    items: [
      {
        name: 'Truffle Fries',
        description: 'Crispy hand-cut fries with truffle oil, parmesan, and fresh herbs.',
        price: '$12',
        allergens: ['V', 'GF'],
      },
      {
        name: 'Grilled Asparagus',
        description: 'Fresh asparagus with lemon zest and olive oil.',
        price: '$10',
        allergens: ['VG', 'GF'],
      },
      {
        name: 'Creamy Mashed Potatoes',
        description: 'Yukon gold potatoes with butter and cream.',
        price: '$10',
        allergens: ['V', 'GF'],
      },
      {
        name: 'Seasonal Vegetables',
        description: 'Chef\'s selection of market vegetables, simply prepared.',
        price: '$11',
        allergens: ['VG', 'GF'],
        seasonal: true,
      },
      {
        name: 'Mac & Cheese',
        description: 'Four-cheese blend with crispy breadcrumb topping.',
        price: '$14',
        allergens: ['V'],
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm dark chocolate cake with molten center, served with vanilla bean ice cream.',
        price: '$14',
        allergens: ['V'],
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar top and fresh berries.',
        price: '$12',
        allergens: ['V', 'GF'],
      },
      {
        name: 'Tiramisu',
        description: 'Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone cream.',
        price: '$13',
        allergens: ['V'],
      },
      {
        name: 'Seasonal Fruit Tart',
        description: 'Buttery tart shell with pastry cream and fresh seasonal fruits.',
        price: '$12',
        allergens: ['V', 'N'],
        seasonal: true,
      },
      {
        name: 'Affogato',
        description: 'Vanilla gelato drowned in fresh espresso with amaretti cookie.',
        price: '$10',
        allergens: ['V', 'GF', 'N'],
      },
    ],
  },
  {
    name: 'Drinks',
    items: [
      {
        name: 'Signature Old Fashioned',
        description: 'Bourbon, house-made bitters, demerara sugar, and orange peel.',
        price: '$16',
        allergens: [],
      },
      {
        name: 'Espresso Martini',
        description: 'Vodka, Kahlúa, fresh espresso, and vanilla simple syrup.',
        price: '$15',
        allergens: [],
      },
      {
        name: 'Fresh Lemonade',
        description: 'House-made lemonade with fresh herbs. Ask about seasonal variations.',
        price: '$6',
        allergens: ['VG'],
      },
      {
        name: 'House Wine Selection',
        description: 'Ask your server about our rotating selection of wines by the glass.',
        price: '$14+',
        allergens: [],
      },
      {
        name: 'Craft Beer Flight',
        description: 'Selection of four local craft beers. Ask your server for current offerings.',
        price: '$18',
        allergens: [],
      },
    ],
  },
]

const categories = menuData.map((cat) => cat.name)

export function MenuContent() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <div className="bg-background pb-24 md:pb-0">
      {/* Header */}
      <div className="bg-heading py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto max-w-2xl text-white/80">
            Crafted with passion using the finest locally-sourced ingredients
          </p>
          {/* GLORIAFOOD_ORDER_WIDGET */}
          <Button 
            size="lg" 
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Order Online
          </Button>
        </div>
      </div>

      {/* Allergen Key */}
      <div className="border-b border-border bg-card py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Allergen Key:</span>
            {Object.entries(allergenKey).map(([code, { label, color }]) => (
              <Badge key={code} variant="secondary" className={cn('text-xs', color)}>
                {code} - {label}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex gap-8 overflow-x-auto py-4" aria-label="Menu categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'shrink-0 border-b-2 pb-2 text-sm font-medium transition-colors',
                  activeCategory === category
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
                )}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu Items */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {menuData
          .filter((cat) => cat.name === activeCategory)
          .map((category) => (
            <div key={category.name}>
              <h2 className="mb-8 font-serif text-3xl font-bold text-heading">
                {category.name}
              </h2>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div 
                    key={item.name} 
                    className="flex flex-col gap-2 border-b border-border pb-6 last:border-0 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-lg font-semibold text-heading">
                          {item.name}
                        </h3>
                        {item.seasonal && (
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            Seasonal
                          </Badge>
                        )}
                        {item.allergens.map((code) => (
                          <Badge 
                            key={code} 
                            variant="secondary" 
                            className={cn('text-xs', allergenKey[code].color)}
                          >
                            {code}
                          </Badge>
                        ))}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-sans text-lg font-semibold tabular-nums text-primary sm:ml-4 sm:text-right">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-2xl font-bold text-heading">
            Ready to Order?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Place your order online for pickup or delivery
          </p>
          {/* GLORIAFOOD_ORDER_WIDGET */}
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Order Online
          </Button>
        </div>
      </div>
    </div>
  )
}
