import { NextPageContext } from 'next'

import { Client } from '../../prismic-configuration'

type HomeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  home: any
}

export default function Home({ home }: HomeProps) {
  return <pre>{JSON.stringify(home, null, 2)}</pre>
}

export async function getStaticProps(context: NextPageContext) {
  const home = await Client(context.req).getSingle('homepage', {})
  return {
    props: { home }
  }
}
