import styled, { css, DefaultTheme } from 'styled-components'

import { SocialLinksProps } from '.'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
  `}
`

const wrapperModifiers = {
  dark: (theme: DefaultTheme) => css`
    fill: ${theme.colors.darkGray.normal};
    &:hover {
      fill: ${theme.colors.darkGray.dark};
    }
    &:active {
      fill: ${theme.colors.darkGray.light};
      border-radius: 50%;
      box-shadow: 0px 0px 0px 4px ${theme.colors.lightGray.light};
    }
    &:disabled {
      fill: ${theme.colors.lightGray.normal};
    }
  `,
  light: (theme: DefaultTheme) => css`
    fill: ${theme.colors.lightGray.normal};
    &:hover {
      fill: ${theme.colors.lightGray.dark};
    }
    &:active {
      fill: ${theme.colors.lightGray.light};
      border-radius: 50%;
      box-shadow: 0px 0px 0px 4px ${theme.colors.lightGray.light};
    }
    &:disabled {
      fill: ${theme.colors.lightGray.normal};
    }
  `
}

export type MenuLinkProps = {
  href?: string
} & Pick<SocialLinksProps, 'color'>

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, color }) => css`
    position: relative;
    display: inline-block;
    margin: 0.3rem ${theme.spacings.small} 0 0;
    padding: 0;
    height: 3.2rem;
    width: 3.2rem;

    ${!!color && wrapperModifiers[color](theme)};
  `}
`
