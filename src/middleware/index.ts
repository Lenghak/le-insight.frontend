import * as middleware from "astro/virtual-modules/middleware.js";

import auth from "./auth";
import cors from "./cors";

export const onRequest = middleware.sequence(cors, auth);
