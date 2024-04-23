import * as middleware from "astro/virtual-modules/middleware.js";

import auth from "./auth";

export const onRequest = middleware.sequence(auth);
