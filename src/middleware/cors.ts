import { env } from "@/core/env";
import type { APIContext, MiddlewareNext } from "astro";

export default async function cors(context: APIContext, next: MiddlewareNext) {
  if (
    context.url.origin !== env.ORIGIN &&
    !context.url.pathname.startsWith("/403")
  )
    return context.redirect("/403");

  return next();
}
