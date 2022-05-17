import type { NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import AuthedRequest from 'lib/auth/authedRequest';
import { withAuth } from '@clerk/nextjs/api';

async function handler(
  req: AuthedRequest,
  res: NextApiResponse
) {

  const { id } = req.query;

  const entry = await prisma.guestbook.findUnique({
    where: {
      id: Number(id)
    }
  });

  if (req.method === 'GET') {
    return res.json({
      id: entry.id.toString(),
      body: entry.body,
      created_by: entry.created_by,
      updated_at: entry.updated_at,
      sender_name: entry.sender_name
    });
  }

  if (!req.auth || req.auth.userId !== entry?.created_by) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'DELETE') {
    await prisma.guestbook.delete({
      where: {
        id: Number(id)
      }
    });

    return res.status(200).json({});
  }

  if (req.method === 'PUT') {
    const body = (req.body.body || '').slice(0, 500);

    await prisma.guestbook.update({
      where: {
        id: Number(id)
      },
      data: {
        body,
        updated_at: new Date().toISOString()
      }
    });

    return res.status(201).json({
      ...entry,
      body
    });
  }

  return res.send('Method not allowed.');
}
export default withAuth(handler);