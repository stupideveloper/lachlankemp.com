import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import Link from 'next/link';

export default function MobileMenu() {
	const [open, setOpen] = useState(false);
	function toggleOpen() {
		setOpen(!open);
		if(!open) {
			document.body.style.overflow = 'hidden';
		}
		if(open) {
			document.body.style.overflow = 'visible';
		}
	}
	const variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
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
        <button aria-label="open navigation" className="border border-solid border-blue-500 px-3 py-1 rounded-full text-blue-500 hover:opacity-75 sm:hidden" onClick={toggleOpen}>
        	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        	</svg>
        </button>
			}
			{open && 
        <button aria-label="close navigation" className="border border-solid border-blue-500 px-3 py-1 rounded-full text-blue-500 hover:opacity-75 sm:hidden" onClick={toggleOpen}>
        	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        		<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        	</svg>
        </button>
			}

			<AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={()=>{null;}}>
				{open && 
          <motion.ul 
          	initial="hidden" 
          	animate="visible" 
          	exit="exit" 
          	variants={variants} 
          	className={` font-bold fixed px-8 l-0 r-0 h-screen w-full left-0 bg-gray-50 mt-6 z-50 py-6 border-t`}>
          	<motion.li variants={item} className={"mb-3 border-b text-gray-600 border-gray-400"}><Link href="/"><a onClick={toggleOpen} className={"p-3 block"}>Home</a></Link></motion.li>
          	<motion.li variants={item} className={"mb-3 border-b text-gray-600 border-gray-400"}><Link href="/dashboard"><a onClick={toggleOpen} className={"p-3 block"}>Dashboard</a></Link></motion.li>
						<motion.li variants={item} className={"mb-3 border-b text-gray-600 border-gray-400"}><Link href="/guestbook"><a onClick={toggleOpen} className={"p-3 block"}>Guestbook</a></Link></motion.li>
						<motion.li variants={item} className={"mb-3 border-b text-gray-600 border-gray-400"}><Link href="/#projects"><a onClick={toggleOpen} className={"p-3 block"}>Projects</a></Link></motion.li>
						<motion.li variants={item} className={"mb-3 border-b text-gray-600 border-gray-400"}><Link href="/mailto:me@lachlankemp.com"><a onClick={toggleOpen} className={"p-3 block"}>Email</a></Link></motion.li>

          	<motion.li variants={item} className={"mb-3 border-b text-gray-600 border-gray-400"}><Link href="https://github.com/stupideveloper"><a onClick={toggleOpen} className={"p-3 block"}>GitHub</a></Link></motion.li>
          </motion.ul>
				}
			</AnimatePresence>


		</div>
	);
}