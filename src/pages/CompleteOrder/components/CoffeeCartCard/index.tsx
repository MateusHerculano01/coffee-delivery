import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1661731200&Signature=RVBGb52TcoTCxpF8H0jN8n2Akbq4wL6V70JeXd7rEEpZ2DD9QHLClUqykdvSZTG2jlW1iZUQFs8JsetrLh1vCsfqZZQTQcDvipXc3CKoA33cX9~vz0QFt~R0lvTgrk-oQaNCpc~IvayMDq-uJwi8Zp9qZCKYVC5J2rL0YkFCFc1k5vA1zg2rgc7c2xp3gvhQxwgpMCeuCX47-u87uVHYZmyiRrKzFUfY2M2Rryh7gPqVe50bjfc6MApE6xq7laHVbhwlEsROiUfP8PM0roXLAz-pUubMjkawLSqwzv6xp-vE~Wl3AyqVOTJST6E-fQtNc-bIIKY-zEYeNttT3ICz8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>

          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$9,90</p>
    </CoffeeCartCardContainer>
  )
}
