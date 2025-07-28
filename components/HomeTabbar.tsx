import { productType } from '@/constants'
import Link from 'next/link'

interface Props {
  selectedTab: string
  onTabSelect: (tab: string) => void
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-5'>
      <div className='flex items-center gap-3 text-sm font-semibold'>
        {productType?.map(item => (
          <button
            onClick={() => onTabSelect(item?.title)}
            key={item?.value}
            className={`border-shop_light_green hover:bg-shop_light_green hover:border_shop_light_green hoverEffect rounded-full border px-4 py-1.5 hover:text-white md:px-6 md:py-2 ${selectedTab === item?.title ? 'bg-shop_light_green border-shop_light_green text-white' : 'bg-shop_light_green/20'}`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        href={'/shop'}
        className='border-shop_light_green hover:bg-shop_light_green hover:border_shop_light_green hoverEffect rounded-full border px-4 py-1.5 text-sm font-semibold hover:text-white md:px-6 md:py-2'
      >
        See all
      </Link>
    </div>
  )
}
export default HomeTabbar
