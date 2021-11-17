import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global 
    styles={`
    https://fonts.googleapis.com/css2?family=Estonia&display=swap
    
    @font-face {
      font-family: 'Estonia';
      src: url('https://fonts.googleapis.com/css2?family=Estonia&display=swap')
    }
    `}
  />
)

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Estonia&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}