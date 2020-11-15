// import { AppProps } from 'next/app'
// import Head from 'next/head'

// import GlobalStyles from 'styles/global'

// function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <link rel="shortcut icon" href="/img/icon-512.png" />
//         <link rel="apple-touch-icon" href="/img/icon-512.png" />
//         <link rel="manifest" href="/manifest.json" />
//         <meta
//           name="description"
//           content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
//         />
//       </Head>
//       <GlobalStyles />
//       <Component {...pageProps} />
//     </>
//   )
// }

// export default App

import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>💜 Virty 💜 - Virtual Assistance</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="The best Game Stores in the world!" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
