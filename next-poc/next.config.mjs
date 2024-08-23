import nextTranslate from "next-translate-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ingenious-cat-c69f722d9d.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
});

export default nextConfig;
