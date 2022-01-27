import Head from "./Head"
import MainWrapper from "./MainWrapper"
import Header from "./sections/Header"
export default function StandardPage({url, image, description, title, children} : {url?: string, image?: string, description?: string, title: string, children: any}) {
	return (
		<div className="bg-gray-50 ">
			<Head url={url} image={image} description={description} title={title} />
			<div className={``}>
				<Header />
			</div>
			
			<MainWrapper>
				<main id="skip">
					{children}
				</main>
				
			</MainWrapper>
		</div>
	)
}