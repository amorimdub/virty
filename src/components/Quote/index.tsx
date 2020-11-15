import * as S from './styles'

export type QuoteProps = {
  imageUrl: string
  quote: string
  author: string
}

const Quote = ({ imageUrl, quote, author }: QuoteProps) => (
  <S.Wrapper imageUrl={imageUrl}>
    <S.Quote>
      &ldquo;
      {quote}
      &rdquo;
    </S.Quote>
    <S.Author>
      <span>by</span>
      {author}
    </S.Author>
  </S.Wrapper>
)

export default Quote
