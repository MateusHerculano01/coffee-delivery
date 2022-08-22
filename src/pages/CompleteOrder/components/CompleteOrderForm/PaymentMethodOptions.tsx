import { CreditCard, Money, Bank } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput
        title="cartão de crédito"
        icon={<CreditCard size={16} />}
      />
      <PaymentMethodInput title="cartão de débito" icon={<Bank size={16} />} />
      <PaymentMethodInput title="dinheiro" icon={<Money size={16} />} />
    </PaymentMethodOptionsContainer>
  )
}
