import Image from "next/image";
import Link from "next/link";
import { Button } from "pretty-things";
import MobileMenu from "./MobileMenu";
import fullbleedstyles from "../../styles/fullbleed.module.css";

export default function Header() {
	return (
		<header className={`px-8`}>
			<div className={fullbleedstyles.wrapper}>
				<nav className={`flex flex-row py-4 relative `}>
					<a href="#skip" className="skip-to-content">Skip to content</a>
					<div className="flex-1 flex justify-start items-center gap-x-4">
						<span className="hidden sm:inline text-blue-600 hover:font-bold transition-all"><Link href={'/#projects'}>Projects</Link></span>
						<span className="hidden sm:inline text-blue-600 hover:font-bold transition-all"><Link href={'/dashboard'}>Dashboard</Link></span>
						<div className="sm:hidden inline"><MobileMenu /></div>
					</div>
					<div>
						<Link href="/" passHref>
							<a>
								{/*eslint-disable-next-line @next/next/no-img-element*/}
								<img src="/images/logo-black.svg" className="hover:skew-y-[7deg] transition" alt="logo" width={60} height={60} />
							</a>
						</Link>
					</div>
					<div className="flex-1 flex justify-end items-center gap-x-4">
						<span className="hidden sm:inline text-blue-600 hover:font-bold transition-all"><Link href={'/guestbook'}>Guestbook</Link></span>
						<span className="text-blue-600 hover:font-bold transition-all"><a href={'mailto:me@lachlankemp.com'}>Email</a></span>
					</div>
				</nav>
			</div>
	

		</header>
	)
}