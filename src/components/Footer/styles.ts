import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 20rem;
    display: grid;
    align-content: space-around;
    grid-template-columns: auto auto auto;
    grid-gap: ${theme.grid.gutter};
    padding: ${theme.grid.gutter};
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
