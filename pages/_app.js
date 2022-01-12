import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { ThemeProvider } from 'next-themes';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import '/styles/nprogress.css';

import splitbee from '@splitbee/web';



function MyApp({ Component, pageProps }) {

	useEffect(() => {
		splitbee.init({
			scriptUrl: "/bee.js",
			apiUrl: "/_hive",
		});
	}, []);

	const router = useRouter();

	useEffect(() => {
		const handleStart = (url) => {
			console.log(`Loading: ${url}`);
			NProgress.start();
		};
		const handleStop = () => {
			NProgress.done();
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleStop);
		router.events.on('routeChangeError', handleStop);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleStop);
			router.events.off('routeChangeError', handleStop);
		};
	}, [router]);

	return (
		<ThemeProvider attribute="class"> 
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
