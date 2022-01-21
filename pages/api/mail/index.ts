// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

//const apiKey = process.env.CONVERTKIT_API_KEY;
const apiKey = process.env.BUTTONDOWN_API_KEY;

//const formId = process.env.CONVERTKIT_FORM_ID;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')
	const { email } = JSON.parse(req.body);
	if (!email) {
		return res.status(400).json({ error: 'Email (email) is required', code: 400 });
	}
	try {
		const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({ email: email, tags: ['personal_website'] }),
        headers: {
          Authorization: `Token ${apiKey}`,
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );

		const data = await response.json();
    console.log(data)
    if (response.status >= 400) {
      return res.status(400).json({
        message: `There was an error subscribing to the newsletter.`,
        code: 400,
      });
    }
   
		return res.status(201).json({ message: 'Thanks! An email will arrive shortly to confirm your subscription.', id: data.id, });
	} catch (error:any) {
		return res.status(500).json({ message: error.message || error.toString() });
	}
};
