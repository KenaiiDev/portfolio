import createMiddleware from "next-intl/middleware";
import { LOCALES } from "./constants/locales";
import { localePrefix } from "./navigation";

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: "en",
  localePrefix,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/(en|es)/:path*"],
};
