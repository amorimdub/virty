import * as S from './styles'

export type MenuProps = {
  color?: 'default' | 'white'
  align?: 'vertical' | 'horizontal'
}

const Menu = ({ color = 'default', align = 'horizontal' }: MenuProps) => {
  return (
    <S.Wrapper>
      <S.MenuNav color={color} align={align}>
        <a href="/">Home</a>
        <a href="/">Serviços</a>
        <a href="/">Contato</a>
      </S.MenuNav>
    </S.Wrapper>
  )
}

export default Menu
