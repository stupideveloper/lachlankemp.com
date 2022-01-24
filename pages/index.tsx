import Header from '../components/sections/Header'
import MainWrapper from "../components/MainWrapper";
import fullbleedstyles from '../styles/fullbleed.module.css'
import Projects from '../components/sections/Projects';
import Image from 'next/image';
import Contact from '../components/sections/Contact';
import NewsletterSignup from '../components/sections/Newsletter';
import RecommendedActions from '../components/sections/RecommendationEngine';
import Head from 'components/Head';
import headStyles from '../styles/headStyles.module.css';

export default function Home() {
  return (
    <div>
      <div className={`rounded-b-[10%] md:rounded-b-[25%] ${headStyles.head} ${fullbleedstyles.wrapper}  mb-10 bg-black`}>
        <div className="full-bleed ">
          <Header linkColor="#fff" />
        </div>
      
        <div className='text-center pt-8 pb-20 px-8 text-white ' id='skip'>
          <div className='flex justify-center mb-4'>
            <Image src='https://res.cloudinary.com/lkemp/image/upload/c_fill,g_face:center,h_400,r_max,w_400,y_860/v1642393734/me_0.75x_lcifje.png' className='' alt='Picture of me' width={125} height={125} quality={100} />
          </div>
          <h1 className='text-5xl font-bold mb-2'>Hi, I&apos;m Lachlan!</h1>
          <p className='text-2xl text-gray-300 mb-4'>Building robots and applications for the web.</p>
          <RecommendedActions />
        </div>
      </div>
      <MainWrapper>
        <Head />
        <Projects />
        <NewsletterSignup />
       
      </MainWrapper>
    </div>
 
    
  )
}