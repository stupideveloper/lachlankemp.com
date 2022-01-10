import Head from '/components/Head';
import BaseContainer from '/components/Containers/BaseContainer';
import HeroItemLink from '/components/HeroItemLink';
import BaseLayout from '/components/Containers/BaseLayout';
import Subscribe from '/components/Subscribe';
import { motion } from 'framer-motion';
import styles from '/styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
	const [rotation, setRotation] = useState(0);

	return (
		<BaseLayout>
			<Head>
				<title>Lachlan Kemp - Developer, Javascript enthusiast, person.</title>
				<meta name="description" content="An Australian focusing on Javascript, React, Svelte and new technologies." />
				<link rel="canonical" href="https://lachlankemp.com/" />				
				<meta property="og:url" content="https://lachlankemp.com/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Lachlan Kemp - Developer, Javascript enthusiast, person." />
				<meta property="og:description" content="A person focusing on Javascript, React, Svelte and new technologies." />
				<meta property="og:image" content="https://lachlankemp.com/assets/screenshot.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="lachlankemp.com" />
				<meta property="twitter:url" content="https://lachlankemp.com/" />
				<meta name="twitter:title" content="Lachlan Kemp - Developer, Javascript enthusiast, person." />
				<meta name="twitter:description" content="An Australian focusing on Javascript, React, Svelte and new technologies." />
				<meta name="twitter:image" content="https://lachlankemp.com/assets/screenshot.png" />
			</Head>

			<BaseContainer>
				<div className="mx-auto flex flex-col">
					<div className="sm:pt-[10%] sm:pb-[40%] pt-[5%] pb-[60%] flex-grow">
						<span className="dark:text-slate-500 text-slate-400 invisible sm:visible cursor-default" data-tip="Down there!">[Hover over items]</span>
						<h1 className="cursor-default transition-colors duration-700 dark:text-slate-500 text-slate-500 text-4xl sm:text-5xl md:text-6xl leading-normal">
							<div className="inline-block" data-tip="To my resume 📄">
								<HeroItemLink link="/work/resume/developer" newTab={false} colorClass="dark:text-slate-300 text-slate-700 dark:hover:text-green-400 hover:text-green-400">Lachlan Kemp</HeroItemLink>
							</div>
							<span>&nbsp;is a person interested in,&nbsp;</span>
							<div className="inline-block" data-tip="To a GitHub project">
								<HeroItemLink newTab={true} link="https://GitHub.com/widelachie/RefTracker" colorClass="dark:hover:text-yellow-400 hover:text-yellow-400 dark:text-slate-300 text-slate-700 " name="Javascript"/>
							</div>
							<span>,&nbsp;</span>
							<div className="inline-block" data-tip="To a GitHub project">
								<HeroItemLink newTab={true} link="https://GitHub.com/widelachie/LiveAtSpace-V2" colorClass="dark:text-slate-300 sm:text-slate-700 dark:hover:text-blue-400 hover:text-blue-400 " name="React"/>
							</div>
							<span>,&nbsp;</span>
							<div className="inline-block" data-tip="To a GitHub project">
								<HeroItemLink newTab={true} link="https://GitHub.com/widelachie/SwagChatv5" colorClass=" dark:text-slate-300 text-slate-700 dark:hover:text-orange-400 hover:text-orange-400" name="Svelte"/>
							</div>
							<span> and new technologies.</span>

						</h1>

				
					</div>
				</div>
				<Subscribe />
			</BaseContainer>
		</BaseLayout>
	);
}
