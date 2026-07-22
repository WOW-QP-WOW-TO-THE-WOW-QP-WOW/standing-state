import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'

/**
 * Site-wide default metadata.
 *
 * These defaults live in next/head (NOT _document.js) specifically so that
 * per-page next/head tags with matching `key` values deduplicate against them.
 * next/document tags do not participate in next/head key dedup, which is why
 * the previous _document-only defaults defeated per-page overrides in
 * production. See DD06 §17.
 *
 * A page that supplies a tag with the same key replaces the default.
 * A page that supplies nothing inherits the default below.
 */
export default function App({ Component, pageProps }) {
  const hideFooter = Component.hideFooter === true
  return (
    <>
      <Head>
        <title key="title">Standing State</title>
        <meta key="og:title" property="og:title" content="Standing State" />
        <meta
          key="og:description"
          property="og:description"
          content="A becomes A, because A knows it is A."
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://standingstate.com/hero_image.png"
        />
        <meta key="twitter:title" name="twitter:title" content="Standing State" />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="A becomes A, because A knows it is A."
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://standingstate.com/hero_image.png"
        />
      </Head>
      <Component {...pageProps} />
      {hideFooter ? null : <Footer />}
    </>
  )
}
