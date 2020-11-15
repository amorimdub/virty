import Logo from 'components/Logo'
import Menu from 'components/Menu'
import SocialLinks from 'components/SocialLinks'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Logo />
    <Menu />
    <SocialLinks />
  </S.Wrapper>
)

export default Header
