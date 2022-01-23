import Image from "next/image";
import Link from "next/link";
import { Button } from "pretty-things";
import MobileMenu from "./MobileMenu";
import fullbleedstyles from "../../styles/fullbleed.module.css";
import React from 'react'

function HeaderLink({linkColor, children} : {linkColor?: string, children?: React.ReactNode}) {
	return (
		<span style={{color: linkColor ? linkColor : ''}} className={`hidden sm:inline ${linkColor ? '' : 'text-black'} hover:font-bold transition-all`}>
			{children}
		</span>
	)
}

export default function Header({linkColor = ""} : {linkColor?: string}) {
	return (
		<header className={`px-8`}>
			<div className={fullbleedstyles.wrapper}>
				<nav className={`flex flex-row py-4 relative rounded-full bg-black/25 px-8 mt-4 mb-4 `}>
					<a href="#skip" className="skip-to-content">Skip to content</a>
					<div className="flex-1 flex justify-start items-center gap-x-4">
						<HeaderLink linkColor={linkColor}><Link href={'/#projects'}>Projects</Link></HeaderLink>
						<HeaderLink  linkColor={linkColor}><Link href={'/dashboard'}>Dashboard</Link></HeaderLink>
						<span style={{color: linkColor ? linkColor : ''}}  className={`inline ${linkColor ? '' : 'text-black'} transition-all`}>
							<MobileMenu linkColor={linkColor} />
						</span>
					</div>
					<div>
						<Link href="/" passHref>
							<a>
								{/*eslint-disable-next-line @next/next/no-img-element*/}
								<img src="/images/logo-black.svg" className="hover:skew-y-[7deg] transition" alt="logo" width={60} height={60} />
							</a>
						</Link>
					</div>
					<div className="flex-1  justify-end items-center gap-x-4 hidden sm:flex ">
						<HeaderLink linkColor={linkColor}><Link href={'/guestbook'}>Guestbook</Link></HeaderLink>
						<HeaderLink linkColor={linkColor}><a href={'mailto:me@lachlankemp.com'}>Email</a></HeaderLink>
					</div>
				</nav>
			</div>
	

		</header>
	)
}