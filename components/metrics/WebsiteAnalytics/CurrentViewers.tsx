import DashItem from "../DashboardItem"
import useSWR from "swr";
import fetcher from "lib/utils/fetcher";
import { ExternalLinkIcon } from "@heroicons/react/outline";

import CountUpNumber from "components/CountUpNumber";

export default function CurrentViewers() {

	const { data, error } = useSWR<any>(`/api/dashboard/umami/current`, fetcher);
	return (
		<DashItem>
			<div className="flex">
				<div className="flex-1">
					<a target="_blank" rel="noreferrer" href="https://umami.lachlankemp.com/share/dbwjG1hN/lachlankemp.com"><h3 className="text-xl flex-1 cursor-pointer">Current Viewers <ExternalLinkIcon className="w-4 h-4 inline" /></h3></a>
				</div>
			</div>
			{data && !error && (
				<span className="text-4xl font-bold"><CountUpNumber number={data.current} duration={1500} /></span>
			)}
			{!data && (
				<span className="text-4xl font-bold">-</span>
			)}
			
		</DashItem>
	)
}