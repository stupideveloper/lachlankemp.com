import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	const response = await fetch(`${process.env.UMAMI_SITE_URL}/active`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Cookie': process.env.UMAMI_COOKIE
		}
	})

	const data = await response.json();
	return res.send({current: data[0].x});
 
}
export default handler;