import type { APIContext, MiddlewareNext } from "astro";
import * as middleware from "astro/virtual-modules/middleware.js";

//  async function cors(context: APIContext, next: MiddlewareNext) {}

async function auth(_: APIContext, next: MiddlewareNext) {
  // const currentPathname = context.url.pathname;

  // const session = await getSession(context.request);

  // check if the user has already logged in
  // if (currentPathname.startsWith("/auth") && session?.user) {
  //   return context.redirect("/");
  // }

  return await next();
}

export const onRequest = middleware.sequence(auth);
