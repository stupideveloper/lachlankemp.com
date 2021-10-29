import { route } from 'next/dist/server/router';
import Link from 'next/link'
import { useRouter } from "next/router"
import { useState } from "react"
import HeaderItem from './HeaderItem';


export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false)
  function toggleOpen() {
    setOpen(!open)
  }
  return (
    <nav className="py-2 md:py-4">
  <div className="flex-grow justify-center px-4 mx-auto md:flex md:items-center">

    <div className="flex justify-between ">
      <div className="flex flex-grow">
        <div className="hover:bg-cool-gray-400 hover:text-cool-gray-900 transition-colors text-cool-gray-400 border-cool-gray-500 px-3 py-1 border border-solid rounded-full">
            <Link href='/'>
                Lachlan Kemp
            </Link>
        </div>
      </div>
      <div className="flex-grow"></div>

      <button aria-label="open navigation" className="border border-solid border-cool-gray-500 px-3 py-1 rounded-full text-cool-gray-500 hover:opacity-75 md:hidden" onClick={toggleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
    <div className={`${open ? 'visible opacity-100 h-auto' : 'hidden opacity-0 md:opacity-100 h-[50px] md:h-auto'} relative transition-all md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 block md:space-x-0.5`}>
      <HeaderItem url={"/"} pathNameMatch={"/"}  pathName={router.pathname}>Home</HeaderItem>
      <HeaderItem url={"/work/resume/developer"} pathNameMatch={"/work/resume/developer"}  pathName={router.pathname}>Resume</HeaderItem>
      <HeaderItem url={"https://social.lachlankemp.com/gh"} pathNameMatch={""}  pathName={router.pathname}>GitHub</HeaderItem>
      <HeaderItem url={"/contact"} pathNameMatch={"/contact"} pathName={router.pathname}>Contact</HeaderItem>
    </div>
  </div>
</nav>
  )
}
