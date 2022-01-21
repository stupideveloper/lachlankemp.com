import DashItem from "../DashboardItem"
import useSWR from "swr";
import fetcher from "lib/utils/fetcher";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

import CountUpNumber from "components/CountUpNumber";
import Link from "next/link";

export default function Subscriptions() {
	const [hasMounted, setHasMounted] = useState(false);
	const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
	useEffect(() => {
		if (window.localStorage.getItem('isSubscribed') === 'true') {
			setIsSubscribed(true)
		} 
	}, [])
	const { data, error } = useSWR<any>(`/api/mail/count`, fetcher);

	if (!hasMounted) {
		return null
	}
	return (
		<DashItem>
			<div className="flex">
				<div className="flex-1">
					{isSubscribed ? (
						<h4 className="text-xl flex-1">(Future) Newsletter Subscribers</h4>
					) : (
						<Link passHref href="/#subscribe"><a><h4 className="text-xl flex-1 cursor-pointer">(Future) Newsletter Subscribers <ExternalLinkIcon className="w-4 h-4 inline" /></h4></a></Link>
					)}
				</div>
			</div>
			{data && !error && (
				<span className="text-4xl font-bold"><CountUpNumber number={data.count} duration={1500} /></span>
			)}
			{!data && (
				<span className="text-4xl font-bold">-</span>
			)}
			
		</DashItem>
	)
}