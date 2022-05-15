import Head from "../functional/Head"
import MainWrapper from "./MainWrapper"
import Header from "../organisms/Header"
export default function StandardPage({url, image, description, title, children} : {url?: string, image?: string, description?: string, title: string, children: any}) {
	return (
		<div className="bg-slate-900">
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