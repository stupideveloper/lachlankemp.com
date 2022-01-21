import fullbleedstyles from '../../styles/fullbleed.module.css'
import Contact from './Contact'
import Link from 'next/link'
export default function Footer() {
	return <footer>
		<div className="text-gray-700 mt-8">
			
			<div className={`${fullbleedstyles.wrapper} py-20`}>
				<div className='px-[0.8rem]'>
					
					<Contact />
					
				</div>
				<div className="grid grid-cols-3 grid-rows-1 gap-y-2 gap-x-4 mt-4">
					<Link passHref href='/#projects'>
						<a className='rounded-full hover:bg-blue-100 transition py-2 px-4'>
							Projects
						</a>
					</Link>
					<Link passHref href='/guestbook'>
						<a className='rounded-full hover:bg-blue-100 transition py-2 px-4'>
							Guestbook
						</a>
					</Link>
					<Link passHref href='/dashboard'>
						<a className='rounded-full hover:bg-blue-100 transition py-2 px-4'>
							Dashboard
						</a>
					</Link>
				</div>
				<div className=' mt-4 px-4'>
					<span>&copy; {new Date().getFullYear()} Lachlan Kemp</span>
				</div>
			</div>

		</div>

	</footer>
}