import Logo from 'components/Logo'
import Menu from 'components/Menu'

import SocialLinks, { SocialLinksProps } from 'components/SocialLinks'

import * as S from './styles'

export type FooterProps = {
  social: SocialLinksProps
}

const Footer = ({ social }: FooterProps) => (
  <S.Wrapper>
    <Logo color="white"></Logo>
    <div>
      <S.Title>Virty</S.Title>
      <Menu align="vertical" color="white"></Menu>
    </div>
    <div>
      <S.Title>Social</S.Title>
      <SocialLinks color="light" {...social} />
    </div>
  </S.Wrapper>
)

export default Footer
