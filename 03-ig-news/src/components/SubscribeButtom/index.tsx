import s from './styles.module.scss'

interface SubscribeButtomProps {
  priceId: string
}

export function SubscribeButtom ({ priceId }:SubscribeButtomProps) {
  return (
    <button type="button" className={s.button}>Subscribe Now</button>
  )
}
