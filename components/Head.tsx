import NextHead from 'next/head';
import React from 'react'
interface Props {
	title?: string;
	description?: string;
	url?: string;
	image?: string;
	children?: React.ReactElement;
}
export default function Head({title, description, url, image, children} :  Props) {
	return (
		<NextHead>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
			<meta name="viewport" content="width=device-width,initial-scale=1.0" />

			<link
				rel="preconnect"
				href="https://umami.lachlankemp.com"
				crossOrigin=""
			/>
			<link rel="preconnect"
				href="https://res.cloudinary.com"
				crossOrigin=''	
			/>

			<meta content="#ffffff" name="theme-color" />
			<meta content="#ffffff" name="msapplication-TileColor" /> 
			<link rel="icon" href="/favicon.ico" />

			<meta name="robots" content="index, follow" />
			<meta property="og:type" content="website" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="lachlankemp.com" />

			{url ? (
				<>
					<meta property="twitter:url" content={url} />
					<link rel="canonical" href={url} />				
					<meta property="og:url" content={url} />
				</>
			) : (
				<>
					<meta property="twitter:url" content="https://lachlankemp.com/" />
					<link rel="canonical" href="https://lachlankemp.com/" />				
					<meta property="og:url" content="https://lachlankemp.com/" />	
				</>
			)}
		
			{image ? (
				<>
					<meta name="twitter:image" content={image} />
					<meta property="og:image" content={image} />
				</>
			) : (
				<>
					<meta name="twitter:image" content="https://lachlankemp.com/assets/screenshot.png" />
					<meta property="og:image" content="https://lachlankemp.com/assets/screenshot.png" />
				</>
			)}
		
			{description ? (
				<>
					<meta name="twitter:description" content={description} />
					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
				</>
			) : (
				<>
					<meta name="twitter:description" content="An Australian focusing on Javascript, React, Svelte and new technologies." />
					<meta name="description" content="An Australian focusing on Javascript, React, Svelte and new technologies." />
					<meta property="og:description" content="An Australian focusing on Javascript, React, Svelte and new technologies." />
				</>
			)}
	
			{title ? (
				<>
					<meta name="twitter:title" content={`${title} – Lachlan Kemp`} />
					<meta property="og:title" content={`${title} – Lachlan Kemp`} />
					<title>{title} – Lachlan Kemp</title>
				</>
			) : (
				<>
					<meta name="twitter:title" content="Lachlan Kemp – Developer, Javascript enthusiast, person." />
					<meta property="og:title" content="Lachlan Kemp – Developer, Javascript enthusiast, person." />
					<title>Lachlan Kemp – Developer, Javascript enthusiast, person.</title>
				</>
			)}
			{children}
		</NextHead>

	)
}