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

          const profile = res.data.included[0];

          return {
            ...res.data.data,
            id: res.data.data.id,
            attributes: {
              first_name: profile?.attributes["first_name"] as string | null,
              last_name: profile?.attributes["last_name"] as string | null,
              image_url: profile?.attributes["image_url"],
              ...res.data.data.attributes,
            },
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
        role: token.attributes.role,
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
