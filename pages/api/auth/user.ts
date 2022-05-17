import type { NextApiResponse } from 'next'
import { withAuth } from '@clerk/nextjs/api'
import AuthedRequest from 'lib/auth/authedRequest';

const handler = async (req: AuthedRequest, res: NextApiResponse) => {
  const API_KEY = process.env.CLERK_API_KEY

  if (req.method === 'DELETE') {
    const response = await fetch('https://api.clerk.dev/v1/users/' + req.auth.userId, {
			method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    const data = await response.json()
    //return res.status(200).json(data)

   
    
    //return res.status(200).json(req.auth.userId)
    return res.status(200).json(data);
  }

	res.status(405).end('Method Not Allowed')
};

export default withAuth(handler);