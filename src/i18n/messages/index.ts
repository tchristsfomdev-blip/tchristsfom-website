import { ar } from "./ar";
import { en, type Catalog } from "./en";
import { ml } from "./ml";
import type { Locale } from "../routing";

export const catalogs: Record<Locale, Catalog> = { en, ar, ml };
