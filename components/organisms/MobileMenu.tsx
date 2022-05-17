import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import Link from 'next/link';

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

function MenuItem({children}) {

	return (
		<motion.li variants={item} className={"mb-3 border-b text-gray-300 border-indigo-900"}>{children}</motion.li>
	)
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

export default function MobileMenu({linkColor}: {linkColor?: string}) {
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

  
	
	return (
		<>
			{!open && 
        <button aria-label="open navigation" className="border border-solid px-3 py-1 rounded-full hover:opacity-75 md:hidden" onClick={toggleOpen}>
        	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        	</svg>
        </button>
			}
			{open && 
        <button aria-label="close navigation" className={"border border-solid px-3 py-1 rounded-full hover:opacity-75 md:hidden"} onClick={toggleOpen}>
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
          	className={`font-bold fixed px-8 h-screen top-16 bottom-0 left-0 right-0 bg-gray-900/95 rounded-3xl mt-10 z-50 py-6 border-t border-t-indigo-800 text-white`}>
          	<MenuItem><Link href="/"><a onClick={toggleOpen} className={"p-3 block"}>Home</a></Link></MenuItem>
						<MenuItem><Link href="/dashboard"><a onClick={toggleOpen} className={"p-3 block"}>Dashboard</a></Link></MenuItem>
						<MenuItem><Link href="/guestbook"><a onClick={toggleOpen} className={"p-3 block"}>Guestbook</a></Link></MenuItem>
						<MenuItem><Link href="/profile"><a onClick={toggleOpen} className={"p-3 block"}>Profile</a></Link></MenuItem>
						<br />
						<MenuItem><Link href="/mailto:me@lachlankemp.com"><a onClick={toggleOpen} className={"p-3 block"}>Email</a></Link></MenuItem>

          	<MenuItem><Link href="https://github.com/stupideveloper"><a onClick={toggleOpen} className={"p-3 block"}>GitHub</a></Link></MenuItem>
          </motion.ul>
				}
			</AnimatePresence>


		</>
	);
}