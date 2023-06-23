/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
  },
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com", "plus.unsplash.com"],
  },
  // rewrites: async () => [
  //   {
  //     source: "/sitemap.xml",
  //     destination: "/api/sitemap",
  //     permanent: true,
  //   },
  // ],
};

module.exports = nextConfig;
