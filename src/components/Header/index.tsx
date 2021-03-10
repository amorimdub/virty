import Logo from 'components/Logo'
import Menu from 'components/Menu'
import SocialLinks, { SocialLinksProps } from 'components/SocialLinks'
import * as S from './styles'

export type HeaderProps = {
  social: SocialLinksProps
}

const Header = ({ social }: HeaderProps) => (
  <S.Wrapper>
    <Logo />
    <Menu />
    <SocialLinks {...social} />
  </S.Wrapper>
)

export default Header
