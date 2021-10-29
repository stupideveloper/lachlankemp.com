import Head from 'next/head'
import Button from '../components/Button.js'
import Spacer from '../components/Spacer.js'
import BaseContainer from '../components/Containers/BaseContainer'
import Footer from '../components/Footer.js'
import HeroItemLink from '../components/HeroItemLink'

export default function Home() {
  return (
    <div className="text-white flex-col items-center justify-center min-h-screen bg-black">
      <Head>
        <title>Lachlan Kemp – Developer, Javascript enthusiast, person.</title>
        <meta name="description" content="A person focusing on, Javascript, React, Svelte and new technologies." />
        <link rel="canonical" href="https://lachlankemp.com/" />
      </Head>
      <BaseContainer>
      <div className="px-3 mx-auto flex flex-col">
        <div className="sm:pt-[15%] sm:pb-[40%] pt-[5%] pb-[60%] flex-grow">
        <span className="text-cool-gray-600 invisible sm:visible cursor-default" data-tip="Down there!">[Hover over items]</span>
          <h1 className="cursor-default transition-colors duration-700 text-gray-400 text-4xl sm:text-5xl md:text-6xl font-bold leading-normal">
            <div className="inline-block" data-tip="To my resume 📄">
              <HeroItemLink link="/work/resume/developer" newTab={false} colorClass="sm:text-gray-400 sm:hover:text-green-400 text-green-400" name="Lachlan Kemp"/>
            </div>
            
            <span>&nbsp;is a person focusing on,&nbsp;</span>
            <div className="inline-block" data-tip="To a GitHub project">
              <HeroItemLink newTab={true} link="https://GitHub.com/widelachie/RefTracker" colorClass="sm:text-gray-400 sm:hover:text-yellow-400 text-yellow-400" name="Javascript"/>
            </div>
            <span>,&nbsp;</span>
            <div className="inline-block" data-tip="To a GitHub project">
              <HeroItemLink newTab={true} link="https://GitHub.com/widelachie/LiveAtSpace-V2" colorClass="sm:text-gray-400 sm:hover:text-blue-400 text-blue-400" name="React"/>
            </div>
            <span>,&nbsp;</span>
            <div className="inline-block" data-tip="To a GitHub project">
              <HeroItemLink newTab={true} link="https://GitHub.com/widelachie/SwagChatv5" colorClass="sm:text-gray-400 sm:hover:text-orange-400 text-orange-400" name="Svelte"/>
            </div>
            <span> and new technologies.</span>

          </h1>
        </div>
        {/*<Footer />*/}
      </div>
      </BaseContainer>

    </div>
  )
}
