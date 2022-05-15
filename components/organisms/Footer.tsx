import fullbleedstyles from '../../styles/fullbleed.module.css'
import Contact from './Contact'
import Link from 'next/link'
import LatestCommit from 'components/atoms/LatestCommit'
export default function Footer() {
	return <footer>
		<div className="text-slate-400 transition-colors mt-8">
			<div className={`${fullbleedstyles.wrapper} py-20`}>			
				<Contact />	
				<LatestCommit />
				
				<div className=' mt-4'>
					<span>&copy; {new Date().getFullYear()} Lachlan Kemp</span>
				</div>
			</div>

		</div>

	</footer>
}