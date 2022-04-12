import fullbleedstyles from '../../styles/fullbleed.module.css'
import Contact from './Contact'
import Link from 'next/link'
export default function Footer() {
	return <footer>
		<div className="text-gray-700 mt-8">
			
			<div className={`${fullbleedstyles.wrapper} py-20`}>
					
				<Contact />
					
				<div className="grid grid-cols-3 grid-rows-1 gap-y-2 gap-x-4 mt-4">
					<Link passHref href='/#projects'>
						<a className='rounded-full transition py-2'>
							Projects
						</a>
					</Link>
					<Link passHref href='/guestbook'>
						<a className='rounded-full transition py-2'>
							Guestbook
						</a>
					</Link>
					<Link passHref href='/dashboard'>
						<a className='rounded-full  transition py-2 '>
							Dashboard
						</a>
					</Link>
				</div>
				<div className=' mt-4'>
					<span>&copy; {new Date().getFullYear()} Lachlan Kemp</span>
				</div>
			</div>

		</div>

	</footer>
}