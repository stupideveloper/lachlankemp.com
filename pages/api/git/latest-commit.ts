import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const response = await fetch(`https://api.github.com/repos/stupideveloper/lachlankemp.com/commits?per_page=1`, {
		method: 'GET'
	});

	const data = await response.json();
	const commit = data[0]
	if (response.status !== 200) {
		return res.status(response.status).json(data)
	}
	res.status(200).json({
		sha: {
			full: commit.sha,
			short: commit.sha.substring(0,7)
		},
		committer: commit.commit.committer.name,
		time: commit.commit.committer.date,
		html_url: commit.html_url
	})
};

// TODO: sentry has been acting up here so I need to work on a fix.
export default handler;