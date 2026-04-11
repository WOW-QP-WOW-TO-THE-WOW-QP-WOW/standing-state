import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="A becomes A, because A knows it is A." />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Standing State" />
        <meta property="og:title" content="Standing State" />
        <meta property="og:description" content="A becomes A, because A knows it is A." />
        <meta property="og:image" content="https://standingstate.com/hero_image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Standing State" />
        <meta name="twitter:description" content="A becomes A, because A knows it is A." />
        <meta name="twitter:image" content="https://standingstate.com/hero_image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cinzel:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
