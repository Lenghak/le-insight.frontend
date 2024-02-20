import type { APIContext, MiddlewareNext } from "astro";
import * as middleware from "astro/virtual-modules/middleware.js";

// async function cors(context: APIContext, next: MiddlewareNext) {}

async function auth(context: APIContext, next: MiddlewareNext) {
  const currentPathname = context.url.pathname;

  if (currentPathname.startsWith("/auth")) {
    // check if the user has already logged in
    // -> true -> redirect to homepage
    // -> false allow
  }

  return await next();
}

export const onRequest = middleware.sequence(auth);
