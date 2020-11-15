import * as S from './styles'

export type TitleProps = {
  children: string
}

const Title = ({ children }: TitleProps) => <S.Title>{children}</S.Title>

export default Title
