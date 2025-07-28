import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import { Flame, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AddToWishlistButton from './AddToWishlistButton'
import { Title } from './ui/text'
import PriceView from './PriceView'
import AddToCartButton from './AddToCartButton'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='border-dark_blue/20 group rounded-md border bg-white text-sm'>
      <div className='group bg-shop_light_bg relative overflow-hidden'>
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt='Product Image'
            loading='lazy'
            width={700}
            height={700}
            className={`bg-shop_light_bg hoverEffect h-64 w-full overflow-hidden object-contain transition-transform ${product?.stock !== 0 ? 'group-hover:scale-105' : 'opacity-50'}`}
          />
        )}
        <AddToWishlistButton product={product} />
        {product?.status === 'sale' && (
          <p className='border-darkColor/50 group-hover:border-shop_light_green hoverEffect group-hover:text-shop_light_green absolute top-2 left-2 z-10 rounded-full border px-2 text-xs'>
            Sale!
          </p>
        )}
        {product?.status === 'new' && (
          <p className='border-darkColor/50 group-hover:border-shop_light_green hoverEffect group-hover:text-shop_light_green absolute top-2 left-2 z-10 rounded-full border px-2 text-xs'>
            New!
          </p>
        )}
        {product?.status === 'hot' && (
          <Link
            href={'/deal'}
            className='border-shop_orange/50 group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect absolute top-2 left-2 z-10 rounded-full border p-1'
          >
            <Flame
              size={18}
              fill='#fb6c08'
              className='text-shop_orange/50 group-hover:text-shop_orange hoverEffect'
            />
          </Link>
        )}
      </div>
      <div className='p-3'>
        {product?.categories && (
          <p className='text-shop_light_text line-clamp-1 text-xs uppercase'>
            {product?.categories?.map(cat => cat).join(', ')}
          </p>
        )}
        <Title className='line-clamp-1 text-sm'>{product?.name}</Title>
        <div className='flex items-center gap-0.5'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, index) => (
              <StarIcon
                size={12}
                key={index}
                className={
                  index < 4
                    ? 'text-shop_lighter_green'
                    : 'text-shop_lighter_text'
                }
                fill={index < 4 ? '#93d991' : '#ababab'}
              />
            ))}
          </div>
          <p className='text-shop_light_text text-xs tracking-wide'>
            5 Reviews
          </p>
        </div>
        <div className='flex items-center gap-2.5'>
          <p className='font-medium'>In Stock</p>
          <p
            className={`${product?.stock === 0 ? 'text-red-600' : 'text-shop_light_green/80 font-semibold'}`}
          >
            {(product?.stock as number) > 0 ? product?.stock : 'unavailable'}
          </p>
        </div>
        <PriceView price={product?.price} discount={product?.discount} />
        <AddToCartButton product={product} className='w-36 rounded-full' />
      </div>
    </div>
  )
}
export default ProductCard
