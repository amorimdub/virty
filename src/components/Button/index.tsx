import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  color?: 'dark' | 'accent'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, color = 'accent', fullWidth = false, ...props },
  ref
) => (
  <S.Wrapper fullWidth={fullWidth} color={color} ref={ref} {...props}>
    {children}
  </S.Wrapper>
)

export default forwardRef(Button)
