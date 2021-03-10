import styled, { css } from 'styled-components'

const Sections = styled.section``

export const SectionServices = styled(Sections)`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray.normal};
    padding-bottom: calc(${theme.spacings.xxlarge} * 2);
  `}
`

export const SectionQuote = styled(Sections)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.normal};
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray.normal};
  `}
`

export const SectionContact = styled(Sections)`
  ${({ theme }) => css`
    padding-top: calc(${theme.spacings.xxlarge} * 2);
  `}
`
