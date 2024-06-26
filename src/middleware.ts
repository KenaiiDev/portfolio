import createMiddleware from "next-intl/middleware";
import { LOCALES } from "./constants/locales";
import { localePrefix } from "./navigation";

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: "en",
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/(en|es)/:path*",
  ],
};
