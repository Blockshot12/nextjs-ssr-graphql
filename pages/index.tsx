import Link from 'next/link'
import Head from 'next/head'

import Nav from '../components/Nav'
import withApollo from '../lib/with-apollo'
import { useViewerQuery } from '../lib/viewer.graphql'

const Index = () => {
  const { data } = useViewerQuery()

  if (data) {
    const { viewer } = data
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="" href="/favicon.ico" />
        </Head>
        <Nav />
        You're signed in as {viewer.name} and you're {viewer.status} goto{' '}
        <Link href="/about">
          <a>static</a>
        </Link>{' '}
        test page.
      </div>
    )
  }

  return <div>...</div>
}

export default withApollo(Index)
