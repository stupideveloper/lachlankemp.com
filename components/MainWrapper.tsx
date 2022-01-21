import Footer from './sections/Footer'
import fullbleedstyles from '../styles/fullbleed.module.css'

export default function MainWrapper({...props}) {
	return (
		<>
			<div className={`${fullbleedstyles.wrapper} px-8 py-4`}>
				{props.children}
			</div>
			<Footer />
		</>
	)
}