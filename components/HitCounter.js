import RetroHitCounter from 'react-retro-hit-counter';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Counter() {
	const router = useRouter();
	const [pageViews, setPageViews] = useState(0);
	useEffect(() => {
		fetch(`/api/view?path=${router.asPath}`)
  	.then(response => response.json())
  	.then(data => setPageViews(data.pageViews));

	}, [router.asPath]);


	return <RetroHitCounter
		hits={pageViews}
		/* The following are all default values: */
		withBorder={true}
		withGlow={false}
		minLength={4}
		size={30}
		padding={4}
		digitSpacing={3}
		segmentThickness={3}
		segmentSpacing={0.5}
		segmentActiveColor="#76FF03"
		segmentInactiveColor="#315324"
		backgroundColor="#222222"
		borderThickness={4}
		glowStrength={0.5}
	/>;
	
}