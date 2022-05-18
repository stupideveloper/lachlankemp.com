/*
* This component is designed to check if the newsletter has been subscribed to before loading the component.
* It must be dynamically imported on the client side.
*/

import dynamic from "next/dynamic"
import useStickyState from "lib/hooks/useStickyState"
export default function NewsletterChecker() {
	const [isSubscribed, setIsSubscribed] = useStickyState(false, 'isSubscribed')
	const NewsletterSignup = dynamic(() => import('./Signup'));
	return (
		<>
			{(!isSubscribed) && <NewsletterSignup />}
		</>
	)
}