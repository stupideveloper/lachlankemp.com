import type { NextApiRequest, NextApiResponse } from 'next';
import { sub } from 'date-fns'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	const API_KEY = process.env.BUTTONDOWN_API_KEY;
  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });

  const { count } = await response.json();

  return res.status(200).json({ count });

 
}
export default handler;