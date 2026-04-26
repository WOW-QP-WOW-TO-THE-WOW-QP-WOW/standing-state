import '../styles/globals.css'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  const hideFooter = Component.hideFooter === true
  return (
    <>
      <Component {...pageProps} />
      {hideFooter ? null : <Footer />}
    </>
  )
}
