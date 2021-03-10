import Banner, { BannerProps } from 'components/Banner'
import Contact from 'components/Contact'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Quote, { QuoteProps } from 'components/Quote'
import { ServiceProps } from 'components/Service'
import ServicesGrid from 'components/ServicesGrid'
import { SocialLinksProps } from 'components/SocialLinks'
import Spliter from 'components/Spliter'
import Title from 'components/Title'

import React from 'react'

import * as S from './styles'

export type HomeTemplateProps = {
  banner: BannerProps
  services: ServiceProps[]
  quote: QuoteProps
  social: SocialLinksProps
}

const Home = ({ banner, services, quote, social }: HomeTemplateProps) => (
  <section>
    <Container>
      <Header social={social} />
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

    {/* <S.SectionContact>
      <Container>
        <Spliter />
        <Title>Contato</Title>
      </Container>
      <Container>
        <Contact></Contact>
      </Container>
    </S.SectionContact> */}

    <S.SectionFooter>
      <Container>
        <Footer social={social} />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
