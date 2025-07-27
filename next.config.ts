import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  eslint: {
    // این گزینه باعث میشه موقع بیلد گرفتن، خطاهای ESLint نادیده گرفته بشه
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
