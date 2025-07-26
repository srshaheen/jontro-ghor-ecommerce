'use client'

import { headerData } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderMenu = () => {
  const pathname = usePathname()

  return (
    <div className='text-lightColor hidden w-1/3 items-center justify-center gap-7 text-sm font-semibold capitalize md:inline-flex'>
      {headerData?.map(item => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-shop_light_green hoverEffect group relative ${pathname === item?.href && 'text-shop_light_green'}`}
        >
          {item?.title}
          <span
            className={`bg-shop_light_green hoverEffect absolute -bottom-0.5 left-1/2 h-0.5 w-0 group-hover:left-0 group-hover:w-1/2 ${pathname === item?.href && 'w-1/2'}`}
          />
          <span
            className={`hoverEffect bg-shop_light_green absolute right-1/2 -bottom-0.5 h-0.5 w-0 group-hover:right-0 group-hover:w-1/2 ${pathname === item?.href && 'w-1/2'}`}
          />
        </Link>
      ))}
    </div>
  )
}
export default HeaderMenu
