/// <reference path="../../../lib/types/next-auth.d.ts"/>
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from "next-auth/react"
import prisma from "lib/prisma"
import { DefaultSession } from "next-auth"

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
)  {
  const session : DefaultSession = await getSession({ req })
  if (req.method === "GET") {
    if (session) {
      // Signed in
      return res.status(200).json(session)
    } else {
      // Not Signed in
      return res.status(401).json({ message: "Not signed in" })
    }
  }
  if (req.method === "PATCH") {
    const updateName = await prisma.user.update({
      // @ts-ignore
      where: { id: session.id },
      data: {
        name: req.body.name
      }
      
    })
    return res.status(200).json(updateName)
  }
}
export default handler;