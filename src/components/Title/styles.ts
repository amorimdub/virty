import styled, { css } from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => css`
    display: inline-block;

    font-family: ${theme.font.familyHeader};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 9.6rem;
    color: ${theme.colors.darkGray.normal};
    text-align: center;
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.xxlarge};
    width: 100%;
  `}
`
