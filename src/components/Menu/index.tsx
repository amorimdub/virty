import React, { useState } from 'react'

import * as S from './styles'

const Menu = () => {
  return (
    <S.Wrapper>
      <S.MenuNav>
        <S.MenuLink href="/">Home</S.MenuLink>
        <S.MenuLink href="/">Serviços</S.MenuLink>
        <S.MenuLink href="/">Contato</S.MenuLink>
      </S.MenuNav>
    </S.Wrapper>
  )
}

export default Menu
