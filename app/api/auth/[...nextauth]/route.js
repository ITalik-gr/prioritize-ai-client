import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"





export const authOptions = {
  // Configure one or more authentication providers
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email", placeholder: "Your email" },
      password: { label: "Password", type: "password", placeholder: "Your password" }
    },
    async authorize(credentials, req) {
      const user = { id: "1", name: "Alo", email: "user@gmail.com", password: "12345" }
      console.log(credentials)

      if (user.password === credentials.password && user.email === credentials.email) {
        return user
      } else {
        return null
      }
    }
  }),
],
secret: process.env.NEXT_SECRET,

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }