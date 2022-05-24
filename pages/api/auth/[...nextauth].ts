import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import nodemailer from 'nodemailer';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "lib/prisma"

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
						
      maxAge: 10 * 60, // Magic links are valid for 10 min only
    }),
  ],
	pages: {
		signIn: '/auth/login'
	}
});

