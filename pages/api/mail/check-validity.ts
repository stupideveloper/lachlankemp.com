import type { NextApiRequest, NextApiResponse } from 'next';
import { sub } from 'date-fns'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	const API_KEY = process.env.BUTTONDOWN_API_KEY;
	const { id } = req.query;
	if (!id) return res.status(400).json({ error: 'id is required' });
  if (typeof id !== 'number') return res.status(400).json({ error: 'id is invalid' });
  const response = await fetch(`https://api.buttondown.email/v1/subscribers/${id}`, {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  const { creation_date : creationDate, email, id : subscriberId, subscriber_type : subscriberType } = await response.json();

  return res.status(200).json({ 
		creationDate,
		email,
		subscriberId,
		subscriberType
	 });

 
}
export default handler;