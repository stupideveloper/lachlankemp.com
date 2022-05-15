import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
})
export default handler;