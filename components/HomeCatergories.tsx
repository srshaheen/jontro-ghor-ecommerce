import { Category } from '@/sanity.types'
import { Title } from './ui/text'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

const HomeCatergories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className='border-shop_light_green/20 my-10 rounded-md border bg-white p-5 md:my-20 md:p-7'>
      <Title className='border-b pb-3'>Popular Categories</Title>
      <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {categories?.map(category => (
          <div
            key={category?._id}
            className='bg-shop_light_bg gropup flex items-center gap-3 p-5'
          >
            {category?.image && (
              <div className='border-shop_orange/30 hover:border-shop_orange hoverEffect h-20 w-20 overflow-hidden border p-1'>
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                    src={urlFor(category?.image).url()}
                    alt='categoryImage'
                    width={500}
                    height={500}
                    className='hoverEffcet h-full w-full object-contain group-hover:scale-110'
                  />
                </Link>
              </div>
            )}
            <div className='space-y-1'>
              <h3 className='text-base font-semibold'>{category?.title}</h3>
              <p className='text-sm'>
                <span className='text-shop_dark_green font-bold'>{`(${category?.productCount})`}</span>{' '}
                items Avaiable
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default HomeCatergories
