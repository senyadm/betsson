import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "bettson.gr",
          },
        ],
        destination: "https://www.bettson.gr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
