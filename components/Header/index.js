import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderItem from './HeaderItem';
import ThemeToggle from '../ThemeToggle';
import SoundToggle from '../SoundToggle'
import MobileMenu from './MobileMenu';


export default function Header() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	function toggleOpen() {
		setOpen(!open);
	}
	return (
		<nav className="sm:pt-4 py-4 pt-8">
			<div className="flex-grow justify-center px-8 sm:px-4 mx-auto sm:flex sm:items-center">

				<div className="flex justify-between ">
					<div className="flex flex-grow">
						<div className="dark:hover:bg-cool-gray-400 hover:bg-cool-gray-700 dark:hover:text-cool-gray-900 hover:text-white transition-colors dark:text-cool-gray-400 dark:border-cool-gray-500 border-cool-gray-700 px-3 py-1 border border-solid rounded-full">
							<Link href='/'>
                Lachlan Kemp
							</Link>
						</div>
					</div>
					<div className="flex-grow"></div>

					<MobileMenu />

				</div>
				<div className={`transition-all flex-row ml-auto mt-0 space-x-0.5	hidden sm:flex`}>
					<HeaderItem url={"/"} pathNameMatch={"/"}  pathName={router.pathname}>Home</HeaderItem>
					<HeaderItem url={"/work/resume/developer"} pathNameMatch={"/work/resume/developer"}  pathName={router.pathname}>Resume</HeaderItem>
					<HeaderItem url={"https://social.lachlankemp.com/gh"} pathNameMatch={""}  pathName={router.pathname}>GitHub</HeaderItem>
					<HeaderItem url={"/contact"} pathNameMatch={"/contact"} pathName={router.pathname}>Contact</HeaderItem>
					<ThemeToggle />
					<SoundToggle />
				</div>

			</div>
		</nav>
	);
}
