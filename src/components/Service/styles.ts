import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.large};
    color: ${theme.colors.darkGray.normal};
    text-align: center;
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
    width: 60%;
  `}
`
export const List = styled.ul`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.medium};
  `}
`
export const ListItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray.normal};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
