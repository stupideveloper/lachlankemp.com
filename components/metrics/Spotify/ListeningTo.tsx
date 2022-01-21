import DashItem from "../DashboardItem"
import useSWR from "swr";
import fetcher from "lib/utils/fetcher";
import { ExternalLinkIcon } from "@heroicons/react/outline";


export default function ListeningTo() {

	const { data, error } = useSWR<any>(`/api/spotify/current`, fetcher);
	return (
		<DashItem>
			<div className="flex">
				<div className="flex-1">
					{data?.isPlaying ? (
						<a target="_blank" rel="noreferrer" href={data?.songUrl}><h4 className="text-xl flex-1 cursor-pointer">Currently Listening To <ExternalLinkIcon className="w-4 h-4 inline" /></h4></a>
					): (
						<a target="_blank" rel="noreferrer" href={data?.songUrl}><h4 className="text-xl flex-1 cursor-pointer">Last Listened To <ExternalLinkIcon className="w-4 h-4 inline" /></h4></a>
					)}
				</div>
			</div>
			{data && !error && (
				<div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
					<span className="text-4xl font-bold">{data.artist}</span>
				</div>

			)}
			{!data && (
				<span className="text-4xl font-bold">-</span>
			)}
			
		</DashItem>
	)
}

{/*<span className="text-4xl font-bold">{data.title}</span>*/}