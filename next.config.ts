import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/services/v-chro-5p-process-outsourcing",
        destination: "/services/v-chro-consultancy",
        permanent: true,
      },
      {
        source: "/:locale(ar|ml)/services/v-chro-5p-process-outsourcing",
        destination: "/:locale/services/v-chro-consultancy",
        permanent: true,
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  // Allow HMR when opening the local network URL on another device / browser tab.
  allowedDevOrigins: ["192.168.29.33", "localhost"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withNextIntl(nextConfig);
