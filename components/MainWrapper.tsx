import Footer from './sections/Footer'
import fullbleedstyles from '../styles/fullbleed.module.css'
<<<<<<< HEAD
=======
import Head from 'next/head'
>>>>>>> 37cd1d48382be700cddd9ec143de566a64ae4635

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