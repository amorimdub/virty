import * as S from './styles'

import Button from '../Button'

export type BannerProps = {
  title: string
  subTitle: string
  actionText: string
  bannerImageUrl: string
}

const Banner = ({
  title,
  subTitle,
  actionText,
  bannerImageUrl
}: BannerProps) => (
  <S.Wrapper>
    <div>
      <div>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <Button>{actionText}</Button>
      </div>
    </div>
    <div>
      <S.Banner src={bannerImageUrl}></S.Banner>
    </div>
  </S.Wrapper>
)

export default Banner
