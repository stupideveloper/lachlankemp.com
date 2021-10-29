import BaseContainer from "../components/Containers/BaseContainer"
import Head from 'next/head'
export default function test() {
  return (
  <div className="text-white flex-col items-center justify-center min-h-screen bg-black">
    <Head>
      <title>Contact | Lachlan Kemp</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BaseContainer>
    hello
    </BaseContainer>
    </div>
  )
}