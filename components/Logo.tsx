import { cn } from '@/lib/utils'
import Link from 'next/link'

const Logo = ({
  className,
  spanDesign
}: {
  className?: string
  spanDesign?: string
}) => {
  return (
    <Link href={'/'} className='inline-flex'>
      <h2
        className={cn(
          'text-shop_dark_green hover:text-shop_light_green hoverEffect group font-sans text-2xl font-black tracking-wider uppercase',
          className
        )}
      >
        Jontro
        <span
          className={cn(
            'text-shop_light_green group-hover:text-shop_dark_green hoverEffect',
            spanDesign
          )}
        >
          Ghor
        </span>
      </h2>
    </Link>
  )
}
export default Logo
