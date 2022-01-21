import type { NextApiRequest, NextApiResponse } from 'next';
import { sub } from 'date-fns'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	const { timeframe } = req.query;

	function calculateTimes(reqTimeframe) {
		const now = new Date().getTime();
		var past: number;
		switch (reqTimeframe) {
			case 'day':
				past = sub(new Date(), {
					days: 1
				}).getTime();
				return {now, past};

			case 'week':
				past = sub(new Date(), {
					weeks: 1
				}).getTime();
				return {now, past};

			case 'month':
				past = sub(new Date(), {
					months: 1
				}).getTime();
				return {now, past};
			case 'year':
				past = sub(new Date(), {
					years: 1
				}).getTime();
				return {now, past};
			case 'all time':
		
				return {now, past: 1642512600000};

			default:
				return {now, past};
		}
	}
	const { now, past } = calculateTimes(timeframe);
	if (!past) return res.status(400).send({error: 'Invalid timeframe'});

	const response = await fetch(`${process.env.UMAMI_SITE_URL}/stats?start_at=${past}&end_at=${now}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Cookie': process.env.UMAMI_COOKIE
		}
	})

	const data = await response.json();
	return res.send(data);
 
}
export default handler;