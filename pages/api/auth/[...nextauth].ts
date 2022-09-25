import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "lib/prisma"
import { readFileSync } from 'fs';
import path from 'path';


const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  secure: true,
});

const emailsDir = path.resolve(process.cwd(), 'emails');

const sendVerificationRequest = ({ identifier, url }) => {
  const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
    encoding: 'utf8',
  });
  const emailTemplate = Handlebars.compile(emailFile);
  transporter.sendMail({
    from: `${process.env.EMAIL_FROM}`,
    to: identifier,
    subject: 'Your sign-in link for lachlankemp.com',
    html: emailTemplate({
      signin_url: url,
      email: identifier,
    }),
  });
};


export default NextAuth({
	adapter: PrismaAdapter(prisma),
	secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    EmailProvider({
			sendVerificationRequest,
						
      maxAge: 10 * 60, // Magic links are valid for 10 min only
    }),
  ],
	pages: {
		signIn: '/auth/login'
	},
  callbacks: {
    async session({ session, user, token }) {
      session.id = user.id
      return Promise.resolve(session)
    },
  }
});

