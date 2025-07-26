import { cn } from '@/lib/utils'

const Container = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('mx-auto max-w-screen-xl px-4', className)}>
      {children}
    </div>
  )
}
export default Container
