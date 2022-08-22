import { ReactNode } from 'react'

import { PaymentMethodContainer } from './styles'

interface PayentMethodInputProps {
  icon: ReactNode
  title: string
}

export function PaymentMethodInput({ icon, title }: PayentMethodInputProps) {
  return (
    <PaymentMethodContainer>
      {icon}
      {title}
    </PaymentMethodContainer>
  )
}
