import postSignIn from "@/modules/auth/services/sign-in-api";

import Credentials from "@auth/core/providers/credentials";
import { defineConfig } from "auth-astro";

export default defineConfig({
  providers: [
    Credentials({
      id: "credentials",
      authorize: async (credentials, _) => {
        if (!credentials.email || !credentials.password) return null;

        try {
          const res = await postSignIn({
            email: credentials.email as string,
            password: credentials.password as string,
          });

          return {
            ...res.data.data,
            ...res.data.meta,
          };
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      return {
        ...token,
        ...user,
      };
    },
    session: ({ session, token }) => {
      session.user = {
        id: token.id,
        type: token.type,
        ...token.attributes,
      };

      session.tokens = {
        iat: token.iat,
        exp: token.exp,
        jti: token.jti,
        sub: token.sub,
        at: token.accessToken,
        rt: token.refreshToken,
      };
      return {
        ...session,
      };
    },
  },
  pages: {
    error: "/500",
    newUser: "/onboarding/welcome",
    signIn: "/auth/sign-in",
    signOut: "/",
    verifyRequest: "/confirm-email",
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
