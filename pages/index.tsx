import Header from '../components/sections/Header'
import MainWrapper from "../components/MainWrapper";
import fullbleedstyles from '../styles/fullbleed.module.css'
import Projects from '../components/sections/Projects';
import Image from 'next/image';
import Contact from '../components/sections/Contact';
import NewsletterSignup from '../components/sections/Newsletter';
import RecommendedActions from '../components/sections/RecommendationEngine';

export default function Home() {
  return (
    <>
      <div className='bg-blue-50'>
        <Header />
      </div>
    
      <div className={`bg-blue-50 rounded-b-[25%] ${fullbleedstyles.wrapper}  mb-10`}>
        
        <div className='text-center pt-10 pb-20 px-8' id='skip'>
          <div className='flex justify-center mb-4'>
            <Image src='/c_fill,g_face:center,h_400,r_max,w_400,y_860/v1642393734/me_0.75x_lcifje.png' className='' alt='Picture of me' width={125} height={125} quality={85} />
          </div>
          <h1 className='text-5xl font-bold mb-2'>Hi, I&apos;m Lachlan!</h1>
          <p className='text-2xl text-gray-600 mb-4'>Building robots and applications for the web.</p>
          <RecommendedActions />
        </div>
      </div>
      <MainWrapper>
        
        <Projects />
        <NewsletterSignup />
       
      </MainWrapper>
    </>
 
    
  )
}