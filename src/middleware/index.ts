import type { APIContext, MiddlewareNext } from "astro";
import * as middleware from "astro/virtual-modules/middleware.js";
import { getSession } from "auth-astro/server";

//  async function cors(context: APIContext, next: MiddlewareNext) {}

async function auth(context: APIContext, next: MiddlewareNext) {
  const currentPathname = context.url.pathname;
  const isAuthPath = currentPathname.startsWith("/auth");
  const isConfirmPath = currentPathname === "/auth/confirm-email";

  const session = await getSession(context.request);
  const isUserLoggedIn = session?.user;
  const isEmailVerified = !!session?.user.confirmed_at;

  if (isConfirmPath && isEmailVerified) {
    return context.redirect("/");
  }

  // check if the user has already logged in
  if (isAuthPath && !isConfirmPath && isUserLoggedIn) {
    return context.redirect("/");
  }

  return await next();
}

export const onRequest = middleware.sequence(auth);
