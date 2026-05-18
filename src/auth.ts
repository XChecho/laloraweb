import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const res = await fetch(`${BACKEND_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })

        const json = await res.json()

        if (!json.success) {
          return null
        }

        const data = json.data

        return {
          id: data.userId || '',
          email: credentials?.email as string,
          name: `${data.firstName} ${data.lastName}`,
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          role: data.userType,
          firstName: data.firstName,
          lastName: data.lastName,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google' && account.id_token) {
        const res = await fetch(`${BACKEND_URL}/auth/google`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            idToken: account.id_token,
            email: user.email,
            name: user.name,
            picture: user.image,
          }),
        })

        const json = await res.json()

        if (!json.success) {
          return false
        }

        const data = json.data

        user.accessToken = data.access_token
        user.refreshToken = data.refresh_token
        user.role = data.userType
        user.firstName = data.firstName
        user.lastName = data.lastName
      }
      return true
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.role = user.role
        token.firstName = user.firstName
        token.lastName = user.lastName
      }
      return token
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      session.user.role = token.role as string
      session.user.firstName = token.firstName as string
      session.user.lastName = token.lastName as string
      return session
    },
  },
  pages: {
    signIn: '/login/',
  },
  session: {
    strategy: 'jwt',
  },
})
