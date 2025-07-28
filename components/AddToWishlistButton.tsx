import { cn } from '@/lib/utils'
import { Product } from '@/sanity.types'
import { Heart } from 'lucide-react'

const AddToWishlistButton = ({
  product,
  className
}: {
  product: Product
  className?: string
}) => {
  return (
    <div className={cn('absolute top-2 right-2 z-10', className)}>
      <button
        className={`hover:bg-shop_dark_green hoverEffect bg-shop_lighter_bg rounded-full p-2.5 hover:text-white`}
      >
        <Heart size={15} />
      </button>
    </div>
  )
}
export default AddToWishlistButton
