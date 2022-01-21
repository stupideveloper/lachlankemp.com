import useSWR from "swr";
import fetcher from "lib/utils/fetcher";

export default function List() {
	const { data, error } = useSWR<any>(`/api/spotify/top`, fetcher);

	if (!data) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Failed Loading Data</div>;
	}
	return (
		<div>
<<<<<<< HEAD
			<h3 className="text-4xl font-bold mb-4">Top Tracks</h3>
=======
			<h2 className="text-4xl font-bold mb-4">Top Tracks</h2>
>>>>>>> 37cd1d48382be700cddd9ec143de566a64ae4635
			<p className=" mb-8">Curious to see what I&apos;ve been listening to? Here are my top spotify songs of the week.</p>
			<ol>
				{data?.tracks?.map((item, key) => (
					<li key={key}>
						<a href={item.songUrl} target="_blank" rel="noreferrer" className="flex gap-x-2 mb-6">
							<div className="font-bold text-gray-500">{key + 1}</div>
							<div>
								<p>{item.title}</p>
								<p className="text-gray-600">{item.artist}</p>
							</div>
						</a>
					</li>
				))}
			</ol>

		</div>
	)
}