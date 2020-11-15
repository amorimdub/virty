import { NextPageContext } from 'next'

import { Client } from '../../prismic-configuration'

type HomeProps = {
  home: any
}

export default function Home({ home }: HomeProps) {
  // return (
  //   <>
  //     <h1>{RichText.asText(home.data.title)}</h1>
  //     <Image
  //       src={home.data.logo.url}
  //       width={home.data.logo.dimensions.width * 10}
  //       height={home.data.logo.dimensions.height * 10}
  //     />
  //     <ul>
  //       {home.data.services.map((item: any, i: number) => (
  //         <p key={i}>{RichText.asText(item.title1)}</p>
  //       ))}
  //     </ul>
  //   </>
  // )
  return <pre>{JSON.stringify(home, null, 2)}</pre>
}

export async function getStaticProps(context: NextPageContext) {
  const home = await Client(context.req).getSingle('homepage', {})
  return {
    props: { home }
  }
}
