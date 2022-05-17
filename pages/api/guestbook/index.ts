import type { NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { withAuth } from '@clerk/nextjs/api'
import AuthedRequest from 'lib/auth/authedRequest';

const handler = async (req: AuthedRequest, res: NextApiResponse) => {
  const API_KEY = process.env.CLERK_API_KEY

	if (req.method === 'GET') {
		const entries = await prisma.guestbook.findMany({
			orderBy: {
				updated_at: 'desc'
			}
		});
		return res.status(200).json(
			entries.map((entry) => ({
				id: entry.id.toString(),
				body: entry.body,
				sender_name: entry.sender_name,
        created_by: entry.created_by,
				updated_at: entry.updated_at
			}))
		);
	}
  
	//const session : any = await getSession({ req });
  //const { email, name } = session.user;

  // if (!session) {
  //   return res.status(403).send('Unauthorized');
  // }

  if (req.method === 'POST') {
    const response = await fetch('https://api.clerk.dev/v1/users/' + req.auth.userId, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    const data = await response.json()
    //return res.status(200).json(data)

    const newEntry = await prisma.guestbook.create({
      data: {
        email: data.email_addresses[0].email_address,
        body: (req.body.body || '').slice(0, 500),
        created_by: req.auth.userId,
        sender_name: data.first_name
      }
    });


    
    //return res.status(200).json(req.auth.userId)
    return res.status(200).json({
       id: newEntry.id.toString(),
       body: newEntry.body,
       created_by: newEntry.created_by,
       updated_at: newEntry.updated_at
    });
  }

	res.status(405).end('Method Not Allowed')
};

// Thanks to @leerob [leerob.io] for some of the code
export default withAuth(handler);