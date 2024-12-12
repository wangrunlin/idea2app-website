export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "idea2app";

export const title = process.env.NEXT_PUBLIC_TITLE || "idea2app";

export const description = process.env.NEXT_PUBLIC_DESCRIPTION || "idea2app";

// Last baseURL
const defaultBaseURL = "";

// Vercel baseURL, make sure it's a valid URL
const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

// meta base url
export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_URL ||
      VERCEL_URL ||
      (globalThis.location && globalThis.location.origin) ||
      defaultBaseURL;

export const nocodbUrl = process.env.NOCODB_URL || "";
export const nocodbToken = process.env.NOCODB_TOKEN || "";
