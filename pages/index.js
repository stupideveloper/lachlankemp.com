import Head from 'next/head';
import BaseContainer from '/components/Containers/BaseContainer';
import HeroItemLink from '/components/HeroItemLink';
import BaseLayout from '/components/Containers/BaseLayout';
import Subscribe from '/components/Subscribe';

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Lachlan Kemp – Developer, Javascript enthusiast, person.</title>
        <meta name="description" content="A person focusing on, Javascript, React, Svelte and new technologies." />
        <link rel="canonical" href="https://lachlankemp.com/" />
      </Head>
      <BaseContainer>
      <div className="mx-auto flex flex-col">
        <div className="sm:pt-[10%] sm:pb-[40%] pt-[5%] pb-[60%] flex-grow">
        <span className="dark:text-cool-gray-500 text-cool-gray-400 invisible sm:visible cursor-default" data-tip="Down there!">[Hover over items]</span>
          <h1 className="cursor-default transition-colors duration-700 dark:text-cool-gray-500 text-cool-gray-500 text-4xl sm:text-5xl md:text-6xl leading-normal">
            <div className="inline-block" data-tip="To my resume 📄">
              <HeroItemLink link="/work/resume/developer" newTab={false} colorClass="dark:text-cool-gray-300 text-cool-gray-700 dark:hover:text-green-400 hover:text-green-400" name="Lachlan Kemp"/>
            </div>
            <span>&nbsp;is a person interested in,&nbsp;</span>
            <div className="inline-block" data-tip="To a GitHub project">
              <HeroItemLink newTab={true} link="https://GitHub.com/widelachie/RefTracker" colorClass="dark:hover:text-yellow-400 hover:text-yellow-400 dark:text-cool-gray-300 text-cool-gray-700 " name="Javascript"/>
            </div>
            <span>,&nbsp;</span>
            <div className="inline-block" data-tip="To a GitHub project">
              <HeroItemLink newTab={true} link="https://GitHub.com/widelachie/LiveAtSpace-V2" colorClass="dark:text-cool-gray-300 sm:text-cool-gray-700 dark:hover:text-blue-400 hover:text-blue-400 " name="React"/>
            </div>
            <span>,&nbsp;</span>
            <div className="inline-block" data-tip="To a GitHub project">
              <HeroItemLink newTab={true} link="https://GitHub.com/widelachie/SwagChatv5" colorClass=" dark:text-cool-gray-300 text-cool-gray-700 dark:hover:text-orange-400 hover:text-orange-400" name="Svelte"/>
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
