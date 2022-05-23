import Header from '../components/organisms/Header'
import MainWrapper from "../components/templates/MainWrapper";
import fullbleedstyles from '../styles/fullbleed.module.css'
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Head from 'components/functional/Head';
import Banner from 'components/molecules/Banner';

import me from 'public/images/me.jpeg'
const NewsletterChecker = dynamic(() => import('../components/organisms/Newsletter/Checker'), { ssr: false })
const RecommendedActions = dynamic(() => import('../components/organisms/RecommendationEngine'), { ssr: false })

export default function Home() {
  return (
    <div className='bg-slate-900 '>
      <Banner />
      <div className={`rounded-br-[10%] ${fullbleedstyles.wrapper} px-8 pb-24 md:rounded-br-[25%] bg-gradient-to-b from-indigo-800 to-slate-900  bg-dark`}>
        <Header darker pad={false} />
        
        <div className=' block lg:flex gap-4 pt-4 lg:pt-10'>
          <div className='mb-4 lg:order-last w-36 sm:w-48'>
            <Image src={me} className=' rounded-full' alt='Picture of Lachlan Kemp' width={756} height={756} />
          </div>
          <div>
            <h1 className='text-5xl mb-2 '>Welcome to the internet residence of Lachlan Kemp.</h1>
            <p className='subtitle font-normal text-slate-300 mb-4'>Building robots and applications for the web.</p>
            <RecommendedActions />
          </div>
   
        </div>
         
      </div>
      <MainWrapper>
        <Head />
        
        <NewsletterChecker />
       
      </MainWrapper>
    </div>
 
    
  )
}