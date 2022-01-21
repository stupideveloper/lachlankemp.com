import Head from "next/head"
import MainWrapper from "./MainWrapper"
import Header from "./sections/Header"
import fullbleedstyles from "../styles/fullbleed.module.css"
export default function StandardPage({...props}) {
	return (
		<div className="bg-gray-50">
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