const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Clacks-Overhead",
            value: "GNU Terry Pratchett",
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
