import Link from 'next/link'
import NowPlaying from './NowPlaying'

export default function Footer() {
  
  return (
    <footer className=" py-2 flex flex-col p-4">
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-1 mt-6 pb-6 sm:grid-cols-3  ">
        <Link href="/"><a className="text-cool-gray-400 hover:text-cool-gray-600 p-2 pl-0">Home</a></Link>
        <Link href="/work/resume/developer"><a className="text-cool-gray-400 hover:text-cool-gray-600 p-2 pl-0">Resume</a></Link>
        <Link href="/contact"><a className="text-cool-gray-400 hover:text-cool-gray-600 p-2 pl-0">Contact</a></Link>
        <Link href="https://social.lachlankemp.com/gh"><a className="text-cool-gray-400 hover:text-cool-gray-600 p-2 pl-0">GitHub</a></Link>
        <Link href="mailto:me@lachlankemp.com"><a className="text-cool-gray-400 hover:text-cool-gray-600 p-2 pl-0">Email</a></Link>
        <Link href="http://nomical-labs.com"><a className="text-cool-gray-400 hover:text-cool-gray-600 p-2 pl-0">Nomical Labs</a></Link>
      </div>
      <p className="text-cool-gray-400 pb-4">© {(new Date().getFullYear())} Lachlan Kemp</p>
      
    </footer>
  )
}