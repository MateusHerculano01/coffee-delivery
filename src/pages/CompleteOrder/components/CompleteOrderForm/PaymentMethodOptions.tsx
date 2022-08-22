import { PaymentMethodOptionsContainer } from './styles'
import { CreditCard, Money, Bank } from 'phosphor-react'
import { RegularText } from '../../../../components/Typography'
import { PaymentMethodInput } from '../PaymentMethodInput'

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  )
}
