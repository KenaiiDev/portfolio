import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "@/constants/locales";

const locales = LOCALES;
export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
