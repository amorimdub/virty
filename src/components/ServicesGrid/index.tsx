import Service, { ServiceProps } from 'components/Service'
import * as S from './styles'

export type ServicesGridProps = {
  items: ServiceProps[]
}

const ServicesGrid = ({ items }: ServicesGridProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <Service key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default ServicesGrid
