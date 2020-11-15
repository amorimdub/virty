import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'color'>

const wrapperModifiers = {
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkGray.normal};
    color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.darkGray.dark};
    }
    &:active {
      background: ${theme.colors.darkGray.light};
      box-shadow: 0px 0px 0px 4px ${theme.colors.lightGray.light};
    }
    &:disabled {
      background: ${theme.colors.lightGray.normal};
    }
  `,
  accent: (theme: DefaultTheme) => css`
    background: ${theme.colors.accent.normal};
    color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.accent.dark};
    }
    &:active {
      background: ${theme.colors.accent.light};
      box-shadow: 0px 0px 0px 4px ${theme.colors.lightGray.light};
    }
    &:disabled {
      background: ${theme.colors.accent.normal};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    line-height: ${theme.font.sizes.medium};

    border: 0;
    border-radius: ${theme.border.radius};
    cursor: pointer;

    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    text-decoration: none;

    outline: 0;

    ${!!color && wrapperModifiers[color](theme)};
  `}
`
