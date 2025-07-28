import { twMerge } from 'tailwind-merge'

interface Props {
  amount: number | undefined
  className?: string
}

const PriceFormatter = ({ amount, className }: Props) => {
  const formatedPrice = new Number(amount).toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency',
    minimumFractionDigits: 2
  })

  return (
    <span
      className={twMerge('text-darkColor text-sm font-semibold', className)}
    >
      {formatedPrice}
    </span>
  )
}
export default PriceFormatter
