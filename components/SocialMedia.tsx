import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const socialLink = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com',
    icon: <Youtube className='h-5 w-5' />
  },
  {
    title: 'Github',
    href: 'https://www.youtube.com',
    icon: <Github className='h-5 w-5' />
  },
  {
    title: 'Linkedin',
    href: 'https://www.youtube.com',
    icon: <Linkedin className='h-5 w-5' />
  },
  {
    title: 'Facebook',
    href: 'https://www.youtube.com',
    icon: <Facebook className='h-5 w-5' />
  },
  {
    title: 'Slack',
    href: 'https://www.youtube.com',
    icon: <Slack className='h-5 w-5' />
  }
]

interface Props {
  className?: string
  iconClassName?: string
  tooltipClassName?: string
}

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5', className)}>
        {socialLink?.map(item => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href={item?.href}
                className={cn(
                  'hover:border-shop_light_green hoverEffect rounded-full border p-2 hover:text-white',
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                'text-darkColor bg-white font-semibold',
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
export default SocialMedia
