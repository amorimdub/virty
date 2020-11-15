import styled, { css, DefaultTheme } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  white: (theme: DefaultTheme) => css`
    .heart {
      fill: ${theme.colors.white};
    }
    .virty {
      fill: ${theme.colors.white};
    }
  `,
  color: (theme: DefaultTheme) => css`
    .heart {
      fill: '#F1B3D2';
    }
    .virty {
      fill: ${theme.colors.brand};
    }
  `,
  black: (theme: DefaultTheme) => css`
    .heart {
      fill: ${theme.colors.black};
    }
    .virty {
      fill: ${theme.colors.black};
    }
  `,

  normal: () => css`
    width: 8.2rem;
    height: 5rem;
  `,

  large: () => css`
    width: 12rem;
    height: 7.2rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    ${!!color && wrapperModifiers[color](theme)}
    ${!!size && wrapperModifiers[size]}
  `}
`
