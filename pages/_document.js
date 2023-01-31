import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="AI GPT3" key="title"/>
        <meta property="og:description" content="AI powered Travel Agent for Vacation.Fyi" key="description"/>
        <meta
          property="og:image"
          content="https://Vacation.Fyi"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
