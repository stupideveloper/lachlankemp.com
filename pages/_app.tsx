import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}:AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <script async defer data-website-id="50755357-bde5-4174-b7a6-93983a511a3b" src="https://umami.lachlankemp.com/umami.js"></script>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}