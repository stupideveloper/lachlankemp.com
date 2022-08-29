import styles from './Menu.module.scss';
import Link from 'next/link';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const menuAnimation = {
	initial: { y: "-100%" },
	show: { y: 0 },
	exit: { y: "-100%"}
}

const linkWrapperAnimation = {
	initial: {opacity: 0},
	show: {opacity: 1,
		transition: {
			staggerChildren: 0.2
		}
	},

}

const linkAnimation = {
	initial: { opacity: 0, x: -30 },
	show: { opacity: 1, x: 0 },
}

export default function Menu({open, setOpen}) {
	return (
		<AnimatePresence>
			{open && (

				<motion.div variants={menuAnimation} transition={{type: "tween", ease:'easeInOut', duration: 0.5}} initial="initial" animate="show" exit="exit" className={styles.menu_wrapper}>
					<div className={styles.header}>
						<button onClick={()=>{setOpen(false)}}>CLOSE MENU</button>
						<img src='/assets/logos/logo-light-grey.svg' alt="Lachlan Kemp Logo" />
					</div>
					<motion.div variants={linkWrapperAnimation} initial="initial" animate="show" className={styles.link_wrapper}>
						<Link href="/">
							<motion.a variants={linkAnimation}>Home</motion.a>
						</Link>
						<Link href="/about">
							<motion.a variants={linkAnimation}>Contact</motion.a>
						</Link>
						<motion.a variants={linkAnimation} href="https://github.com/stupideveloper">Github</motion.a>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>)	

}
