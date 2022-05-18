import Link from "next/link";
import fullbleedstyles from "../../styles/fullbleed.module.css";
import { useState } from 'react'
import dynamic from "next/dynamic";
import useWindowSize from "lib/hooks/useWindowSize";

const MobileMenu = dynamic(() => import('./MobileMenu'))

function HeaderLink({children} : {linkColor?: string, children?: React.ReactNode}) {
	return (
		<span className={`hidden md:inline text-light hover:font-bold transition-all`}>
			{children}
		</span>
	)
}
// function ContactElement({isContactVisible, setIsContactVisible}) {
// 	// onMouseEnter={() => setIsContactVisible(true)} 
// 	const onUnfocus = debounce(() => setIsContactVisible(false), 3000)

// 	const debouncedFocus = () => {
// 		setIsContactVisible(true)
// 		onUnfocus.cancel()
// 	}
// 	return (
// 		<div className="flex" onBlur={onUnfocus} onFocus={debouncedFocus} onMouseLeave={onUnfocus} onMouseEnter={debouncedFocus} onClick={()=>{setIsContactVisible(!isContactVisible)}}>
// 			<motion.div
// 				className="relative"
// 				layout={true}
// 				key="label"
// 				role={"tooltip"}
// 				tabIndex={0}
// 			>			
// 					Contact
// 					{!isContactVisible && (
// 					<motion.span
// 						layout={true}
// 						key="seperator"
// 						className="px-1"
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						exit={{ opacity: 0 }}
// 					>	&gt;</motion.span>	
// 					)}		
// 			</motion.div>
// 		{isContactVisible && (
// 			<motion.span
// 				layout={true}
// 				key="seperator"
// 				className="px-1 hidden lg:flex"
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				exit={{ opacity: 0 }}
// 			> me via</motion.span>
// 		)}
// 		{isContactVisible && (
// 			<motion.div
// 				className="relative flex"
// 				layout={true}
// 				key="hallo"
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				exit={{ opacity: 0 }}
// 			>
// 				<span className="flex lg:hidden">&nbsp;|&nbsp;</span>
// 				<span>&nbsp;or&nbsp;</span>
// 				<HeaderLink><a href="">Email</a></HeaderLink>

// 			</motion.div>
// 		)}
// 	</div>
// )}

function ContactElement() {
	return <></>
}
export default function Header({linkColor = "", darker} : {linkColor?: string, darker?: boolean}) {
	const [isContactVisible, setIsContactVisible] = useState(false)
	const windowSize = useWindowSize()

	return (
		<header className={`px-8 `}>
			<div className={fullbleedstyles.wrapper}>
				<nav className={`flex flex-row py-4 text-light  rounded-full ${darker ? "bg-indigo-900/50" : "bg-indigo-900/25"} border border-indigo-600 px-8 mt-4 mb-4 `}>
					<a href="#skip" className="skip-to-content">Skip to content</a>
					<div className="flex-1 flex justify-start items-center gap-x-4">
						{(windowSize.width <= 768 && (
							<MobileMenu />
						))}
						<HeaderLink ><Link href={'/profile'}>Profile</Link></HeaderLink>
						<HeaderLink ><Link href={'/dashboard'}>Dashboard</Link></HeaderLink>
			
					</div>
					<div>
						<Link href="/" passHref>
							<a>
								{/*eslint-disable-next-line @next/next/no-img-element*/}
								<img src="/images/logo-light.svg" className="hover:skew-y-[7deg] transition" alt="logo" width={60} height={60} />
							</a>
						</Link>
					</div>
					<div className="flex-1 justify-end items-center gap-x-4 hidden md:flex ">
						<HeaderLink><Link href={'/guestbook'}>Guestbook</Link></HeaderLink>
						<HeaderLink ><Link href={'mailto:me@lachlankemp.com'}>Contact</Link></HeaderLink>

					</div>
				</nav>
			</div>
		</header>
	)
}
//				{session && (
// 	<div title="Your profile">
// 	<Link href="/profile">
// 		<a>
// 			<img src={session?.user?.image}  className="h-8 fadeIn" alt={`${session?.user?.name}'s profile picture`} />
// 		</a>
// 	</Link>
// </div>
// )}