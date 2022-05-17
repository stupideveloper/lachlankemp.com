import type { NextApiRequest } from 'next'
export default interface AuthedRequest extends NextApiRequest  {
  auth: {
    sessionId: string;
    userId:    string;
  }
}