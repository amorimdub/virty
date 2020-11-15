import Banner, { BannerProps } from 'components/Banner'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Quote, { QuoteProps } from 'components/Quote'
import { ServiceProps } from 'components/Service'
import ServicesGrid from 'components/ServicesGrid'
import Spliter from 'components/Spliter'
import Title from 'components/Title'

import React from 'react'

import * as S from './styles'

export type HomeTemplateProps = {
  banner: BannerProps
  services: ServiceProps[]
  quote: QuoteProps
}

const Home = ({ banner, services, quote }: HomeTemplateProps) => (
  <section>
    <Container>
      <Header />
      <Banner {...banner} />
    </Container>
    <Spliter />
    <S.SectionServices>
      <Container>
        <Title>Serviços</Title>
        <ServicesGrid items={services} />
      </Container>
    </S.SectionServices>

    <S.SectionQuote>
      <Container>
        <Quote {...quote} />
      </Container>
    </S.SectionQuote>
    <Spliter />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
