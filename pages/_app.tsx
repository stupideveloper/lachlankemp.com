import '../styles/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { SkeletonTheme } from 'react-loading-skeleton'

import { ClerkProvider } from '@clerk/nextjs'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}:AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
				<meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Script strategy='beforeInteractive' data-website-id="50755357-bde5-4174-b7a6-93983a511a3b" src="https://umami.lachlankemp.com/umami.js"></Script>
      <div className='text-light' {...pageProps}>
        <SkeletonTheme baseColor="#374151" highlightColor="#4B5563" borderRadius={"0.5rem"}>
          <Component {...pageProps} />
        </SkeletonTheme>
      </div>
    </ClerkProvider>
  )
}