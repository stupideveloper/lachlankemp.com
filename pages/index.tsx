import Header from '../components/organisms/Header'
import MainWrapper from "../components/templates/MainWrapper";
import fullbleedstyles from '../styles/fullbleed.module.css'
import Image from 'next/image';
import dynamic from 'next/dynamic';

import RecommendedActions from '../components/organisms/RecommendationEngine';
import Head from 'components/functional/Head';
import Banner from 'components/molecules/Banner';

import me from 'public/images/me.jpeg'
const NewsletterChecker = dynamic(() => import('../components/organisms/Newsletter/Checker'), { ssr: false });

export default function Home() {
  return (
    <div className='bg-slate-900'>
      <Banner />
      <div className={`rounded-b-[10%] md:rounded-b-[25%] ${fullbleedstyles.wrapper} bg-gradient-to-b from-indigo-800 to-slate-900 mb-10 bg-dark`}>
        <div className="full-bleed ">
          <Header darker />
        </div>
      
        <div className='text-center pt-8 pb-28 px-8 md:px-12 sm:px-20 text-light ' id='skip'>
          <div className='flex justify-center mb-4 '>
            <div className='relative'>
              <Image src={me} className='object-cover rounded-full' alt='Picture of Lachlan Kemp' width={125} height={125} />
              <div className='absolute bottom-[4%] right-[3%]'>
                <Image src="/images/wave.svg" alt="Waving hand emoji" width={30} height={30}  />
              </div>
            </div>
   
          </div>
          <h1 className='text-5xl font-bold mb-2'>Welcome to the internet residence of Lachlan Kemp.</h1>
          <p className='text-2xl text-slate-300 mb-4'>Building robots and applications for the web.</p>
          <RecommendedActions />
        </div>
      </div>
      <MainWrapper>
        <Head />
        
        <NewsletterChecker />
       
      </MainWrapper>
    </div>
 
    
  )
}