import React from 'react'
import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.darkGray.normal};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.medium} 0;
    font-weight: 400;
    text-decoration: none;
    text-align: center;

    &:hover {
      color: ${theme.colors.darkGray.dark};
      text-decoration: none;
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.2rem;
        background-color: ${theme.colors.darkGray.dark};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`
