'use client'

import { Product } from '@/sanity.types'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  product: Product
  className?: string
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0
  const handleAddToCart = () => {
    window.alert('Add to cart')
  }
  return (
    <div>
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={cn(
          'bg-shop_dark_green/80 text-shop_light_bg border-shop_dark_green/80 hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect mt-1.5 w-full border font-semibold tracking-wide shadow-none hover:text-white',
          className
        )}
      >
        <ShoppingBag /> {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </div>
  )
}
export default AddToCartButton
