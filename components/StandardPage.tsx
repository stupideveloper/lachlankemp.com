import Head from "next/head"
import MainWrapper from "./MainWrapper"
import Header from "./sections/Header"
<<<<<<< HEAD
import fullbleedstyles from "../styles/fullbleed.module.css"
export default function StandardPage({...props}) {
	return (
		<div className="bg-gray-50">
=======
export default function StandardPage({...props}) {
	return (
		<div className="bg-gray-50 ">
>>>>>>> 37cd1d48382be700cddd9ec143de566a64ae4635
			<Head>
				<title>Lachlan Kemp</title>
			</Head>
			<div className={``}>
				<Header />
			</div>
			
			<MainWrapper>
				<main id="skip">
					{props.children}
				</main>
				
			</MainWrapper>
		</div>
	)
}