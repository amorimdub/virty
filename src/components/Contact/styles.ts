import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`
export const Column = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xsmall};
  `}
`
