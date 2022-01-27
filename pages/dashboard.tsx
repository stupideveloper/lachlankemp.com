import StandardPage from "../components/StandardPage";

import Views from "../components/metrics/WebsiteAnalytics/Views";
import CurrentViewers from "../components/metrics/WebsiteAnalytics/CurrentViewers";
import Subscriptions from "../components/metrics/Newsletter/Subscriptions";
import ListeningTo from "components/metrics/Spotify/ListeningTo";
import List from "components/metrics/Spotify/List";


export default function Dashboard() {
	return (
		<StandardPage title="Dashboard" description={`My personal "life" dashboard, which includes all the different stats about my online life`} url="https://lachlankemp.com/guestbook">
			<div>
				<h1 className="text-5xl font-black">Dashboard</h1>
				<p className="text-xl mt-2 text-gray-600">This is my personal &quot;life&quot; dashboard, it includes all the different stats about my online life, and gives you a sneak peak too!</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-12">
					<Views />
					<CurrentViewers />
					<Subscriptions />
					<ListeningTo />
				</div>
				<List />
			</div>
		</StandardPage>
	)
}
