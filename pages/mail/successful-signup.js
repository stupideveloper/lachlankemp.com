import BaseContainer from "/components/Containers/BaseContainer";
import BaseLayout from "/components/Containers/BaseLayout";
import Head from "next/head";
export default function Test() {
	return (
		<BaseLayout>
			<Head>
				<title>Subscribed – Lachlan Kemp</title>
				<meta name="description" content="A person focusing on, Javascript, React, Svelte and new technologies." />
				<link rel="canonical" href="https://lachlankemp.com/mail/successful-signup" />
			</Head>
			<BaseContainer>
				<div>
					<h1 className="text-5xl">Successfuly Subscribed</h1>
					<h2 className="mt-4">Thanks for signing up, you will now receive emails from me!</h2>
				</div>
				
			</BaseContainer>
		</BaseLayout>
	);
}