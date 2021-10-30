import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from '../ThemeToggle'
import Link from 'next/link'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  function toggleOpen() {
    setOpen(!open)
    if(!open) {
      document.body.style.overflow = 'hidden'
    }
    if(open) {
      document.body.style.overflow = 'visible'
    }
  }
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0, 
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { 
      x: -20, 
      opacity: 0
     },
    visible: {
      x: 0,
      opacity: 1
    },
    exit: { 
      x: -20, 
      opacity: 0 
    },
  };
  return (
    <div>
      {!open &&
        <button aria-label="open navigation" className="border border-solid border-cool-gray-500 px-3 py-1 rounded-full text-cool-gray-500 hover:opacity-75 sm:hidden" onClick={toggleOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      }
      {open && 
        <button aria-label="close navigation" className="border border-solid border-cool-gray-500 px-3 py-1 rounded-full text-cool-gray-500 hover:opacity-75 sm:hidden" onClick={toggleOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      }

      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={()=>{null}}>
        {open && 
          <motion.ul 
          initial="hidden" 
          animate="visible" 
          exit="exit" 
          variants={variants} 
          className={` font-bold absolute h-screen w-full left-0 bg-white dark:bg-black mt-2 z-50 px-4 py-6`}>
            <motion.li variants={item} className={"mb-3 border-b dark:text-cool-gray-400 text-cool-gray-700 dark:border-cool-gray-800 border-cool-gray-400"}><Link href="/"><a onClick={toggleOpen} className={"p-3 block"}>Home</a></Link></motion.li>
            <motion.li variants={item} className={"mb-3 border-b dark:text-cool-gray-400 text-cool-gray-700 dark:border-cool-gray-800 border-cool-gray-400"}><Link href="/work/resume/developer"><a onClick={toggleOpen} className={"p-3 block"}>Resume</a></Link></motion.li>
            <motion.li variants={item} className={"mb-3 border-b dark:text-cool-gray-400 text-cool-gray-700 dark:border-cool-gray-800 border-cool-gray-400"}><Link href="https://social.lachlankemp.com/gh"><a onClick={toggleOpen} className={"p-3 block"}>GitHub</a></Link></motion.li>
            <motion.li variants={item} className={"mb-3 border-b dark:text-cool-gray-400 text-cool-gray-700 dark:border-cool-gray-800 border-cool-gray-400  "}><Link href="/contact"><a onClick={toggleOpen} className={"p-3 block"}>Contact</a></Link></motion.li>
            <motion.li variants={item} className={"p-3 w-min"}><ThemeToggle /></motion.li>
          </motion.ul>
        }
      </AnimatePresence>


    </div>
  )
}