import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    padding-top: calc(${theme.spacings.xxlarge} * 2);
    padding-bottom: calc(${theme.spacings.xxlarge} * 2);
    > div {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      padding-left: ${theme.spacings.xxlarge};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.familyHeader};
    font-size: 9.6rem;
    line-height: 9.6rem;
    color: ${theme.colors.darkGray.normal};
    margin-left: -${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.large};
    color: ${theme.colors.darkGray.normal};
    margin-bottom: ${theme.spacings.large};
  `}
`
export const Banner = styled.img`
  width: 80%;
`
