import type { APIContext, MiddlewareNext } from "astro";
import { getSession } from "auth-astro/server";

export default async function auth(context: APIContext, next: MiddlewareNext) {
  const currentPathname = context.url.pathname;
  const isAuthPath = currentPathname.startsWith("/auth/sign");
  const isConfirmPath = currentPathname === "/auth/confirm-email";

  const session = await getSession(context.request);
  const isUserLoggedIn = session?.user;
  const isEmailVerified = !!session?.user.confirmed_at;

  if (isConfirmPath && isEmailVerified) {
    return context.redirect("/");
  }

  // check if the user has already logged in
  if (isAuthPath && isUserLoggedIn) {
    return context.redirect("/");
  }

  return next();
}
