import { NextPageContext } from 'next'
import Image from 'next/image'

import { RichText, RichTextBlock } from 'prismic-reactjs'

import Home, { HomeTemplateProps } from 'templates/Home'

import { Client } from '../../prismic-configuration'

import { BannerProps } from 'components/Banner'
import { ServiceProps } from 'components/Service'
import { QuoteProps } from 'components/Quote'

// type HomeProps = {
//   home: any
// }

// export default function Home({ home }: HomeProps) {
//   return (
//     <>
//       <h1>{RichText.asText(home.data.title)}</h1>
//       <Image
//         src={home.data.logo.url}
//         width={home.data.logo.dimensions.width * 10}
//         height={home.data.logo.dimensions.height * 10}
//       />
//       <ul>
//         {home.data.services.map((item: any, i: number) => (
//           <p key={i}>{RichText.asText(item.title1)}</p>
//         ))}
//       </ul>
//     </>
//   )
//   return <pre>{JSON.stringify(home, null, 2)}</pre>
// }

// export async function getStaticProps(context: NextPageContext) {
//
//   return {
//     props: { home }
//   }
// }

export default function Index(props: HomeTemplateProps) {
  console.log(props)
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export async function getStaticProps(context: NextPageContext) {
  const home = await Client(context.req).getSingle('homepage', {})
  const banner: BannerProps = {
    title: RichText.asText(home.data.title),
    subTitle: RichText.asText(home.data.subtitle),
    actionText: RichText.asText(home.data.call_to_action),
    bannerImageUrl: home.data.banner.url
  }
  // const services: ServiceProps[] = []
  // console.log(home.data.services)
  const services: ServiceProps[] = home.data.services.map(
    ({
      service_title,
      service_image: { url },
      service_content
    }: {
      service_title: RichTextBlock[]
      service_image: {
        url: string
      }
      service_content: {
        text: string
      }[]
    }) => {
      return {
        title: RichText.asText(service_title),
        imageUrl: url,
        items: service_content.map((c) => c.text)
      }
    }
  )

  const quote: QuoteProps = {
    imageUrl: home.data.background.url,
    quote: RichText.asText(home.data.quote),
    author: RichText.asText(home.data.author)
  }

  return {
    props: {
      banner,
      services,
      quote
    }
  }
}
