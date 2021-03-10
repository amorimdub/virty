import { MenuProps } from './index'
import styled, { css, DefaultTheme } from 'styled-components'

const modifiers = {
  default: (theme: DefaultTheme) => css`
    a {
      color: ${theme.colors.darkGray.normal};
      &:hover {
        color: ${theme.colors.darkGray.dark};
        &::after {
          background-color: ${theme.colors.darkGray.dark};
        }
      }
    }
  `,
  white: (theme: DefaultTheme) => css`
    a {
      color: ${theme.colors.white};
      &:hover {
        color: ${theme.colors.white};
        &::after {
          background-color: ${theme.colors.white};
        }
      }
    }
  `,

  vertical: (theme: DefaultTheme) => css`
    display: block;
    a {
      margin: 0 0 0 ${theme.spacings.xsmall};
      display: block;
      text-align: left;
    }
  `,

  horizontal: (theme: DefaultTheme) => css`
    margin-left: ${theme.spacings.small};

    a {
      margin: 0.3rem ${theme.spacings.medium} 0;

      &:hover {
        text-decoration: none;
        &::after {
          content: '';
          position: absolute;
          display: block;
          height: 0.2rem;
          animation: hoverAnimation 0.2s forwards;
        }

        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  `
}

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const MenuNav = styled.div<MenuProps>`
  ${({ theme, align, color }) => css`
    a {
      position: relative;
      font-size: ${theme.font.sizes.medium};

      font-weight: 400;
      text-decoration: none;
    }

    ${!!color && modifiers[color](theme)}
    ${!!align && modifiers[align](theme)}
  `}
`
