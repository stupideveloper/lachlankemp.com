import useSWR from "swr"
import fetcher from "lib/utils/fetcher";

export default function LatestCommit() {
	const { data, error } = useSWR<any>(`/api/git/latest-commit`, fetcher);
	if (data?.html_url) return (
		<a target="_blank" rel="noreferrer" className="pt-2" href={data?.html_url}><span className="text-gray-400 text-sm">stupideveloper/lachlankemp.com</span><br /><code className="mono">{data?.sha?.short}</code></a>
	)
	return <>{JSON.stringify(error)}</>
}