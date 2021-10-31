import Link from 'next/link'
import NowPlaying from './NowPlaying'

export default function Footer() {
  return (
    <footer className=" flex flex-col sm:py-4 sm:px-4 py-2 px-8">
      <hr className="w-full border-1 border-cool-gray-300 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-1 mt-6 pb-6 sm:grid-cols-3  ">
        <Link href="/"><a className="footer--item">Home</a></Link>
        <Link href="/work/resume/developer"><a className="footer--item">Resume</a></Link>
        <Link href="/contact"><a className="footer--item">Contact</a></Link>
        <Link href="https://social.lachlankemp.com/gh"><a className="footer--item">GitHub</a></Link>
        <Link href="mailto:me@lachlankemp.com"><a className="footer--item">Email</a></Link>
        {/*<Link href="http://nomical-labs.com"><a className="footer--item">Nomical Labs</a></Link>*/}
      </div>
      <p className="text-cool-gray-400">© {(new Date().getFullYear())} Lachlan Kemp</p>
      <p className="text-cool-gray-400 pb-4 text-sm">*Please keep in mind this website is new and is likely full of bugs. If you spot one, <a href="mailto:me@lachlankemp.com" className="text-blue-700 dark:text-blue-400">email</a> me.</p>
    </footer>
  )
}