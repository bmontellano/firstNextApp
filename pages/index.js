import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian's Web Dev Styles</title>
        <meta name='keywords' content='web dev, programming'></meta>
      </Head>
      <h1>First Next App</h1>
      <h5 style={{"width": "80%", padding: 10}}>Next.js is good for SEO,  because of server-side rendering. AKA after requested, the server sends a response page rich in pre-rendered HTML, which SEO loves.</h5>
    </div>
  )
}
