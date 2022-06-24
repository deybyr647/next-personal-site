import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { authorizeUser } from "../../../components/admin/util";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    maxAge: 60 * 60 * 1, //1 hour
  },
  callbacks: {
    signIn: async (OAuthSession, ...rest) => {
      const { user } = OAuthSession;
      const { email } = user;

      const isAuth = await authorizeUser(email);
      return isAuth || "/unauthorized";
    },
  },
});
