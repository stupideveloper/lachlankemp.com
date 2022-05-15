import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	const API_KEY = process.env.BUTTONDOWN_API_KEY;
	const { id } = req.query;
	if (!id) return res.status(400).json({ error: 'id is required' });
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
// TODO: sentry has been acting up here so I need to work on a fix.
export default handler;