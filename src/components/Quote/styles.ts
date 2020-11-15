import styled, { css } from 'styled-components'

export type WrapperProps = {
  imageUrl: string
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, imageUrl }) => css`
    position: relative;

    height: 38rem;

    background-image: url(${imageUrl});
    background-size: cover;

    color: ${theme.colors.white};
    font-family: ${theme.font.family};

    display: flex;
  `}
`
export const Quote = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.large};

    max-width: 50%;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: 300;
    font-style: italic;

    display: flex;
    align-items: center;

    padding-left: ${theme.spacings.xxlarge};
  `}
`
export const Author = styled.p`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacings.large};
    bottom: ${theme.spacings.large};

    font-family: ${theme.font.familyHeader};
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    span {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.medium};
      font-weight: 300;
      font-style: italic;
    }
  `}
`
