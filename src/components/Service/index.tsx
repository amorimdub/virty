import * as S from './styles'

export type ServiceProps = {
  title: string
  imageUrl: string
  items: string[]
}

const Service = ({ title, imageUrl, items }: ServiceProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Image src={imageUrl} />
    <S.List>
      {items.map((item, i) => (
        <S.ListItem key={i}>{item}</S.ListItem>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Service
