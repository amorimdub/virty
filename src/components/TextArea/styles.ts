import styled, { css, DefaultTheme } from 'styled-components'

import { TextAreaProps } from '.'

type WrapperProps = Pick<TextAreaProps, 'disabled'> & { error?: boolean }

export const TextAreaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.small};
    border: 0.2rem solid;
    border-color: ${theme.colors.darkGray.normal};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray.normal};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray.normal} inset;
      filter: none;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray.normal};
    cursor: pointer;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger.normal};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${TextAreaWrapper} {
      border-color: ${theme.colors.danger.normal};
    }
    ${Label} {
      color: ${theme.colors.danger.normal};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${TextArea} {
      cursor: not-allowed;
      color: ${theme.colors.lightGray.normal};
      &::placeholder {
        color: currentColor;
      }
    }
    ${TextAreaWrapper} {
      border-color: ${theme.colors.lightGray.normal};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
