import Head from 'next/head'

export default function EssaysPage() {
  return (
    <>
      <Head>
        <title>Essays — Standing State Press</title>
        <meta
          name="description"
          content="Essay index for Standing State Press."
        />
      </Head>

      <main style={{ padding: '4rem', color: '#fff', background: '#000', minHeight: '100vh' }}>
        <h1>Essays</h1>
        <p>Essay index is live.</p>
        <p><a href="/essays/canonical">Canonical Essays</a></p>
      </main>
    </>
  )
}