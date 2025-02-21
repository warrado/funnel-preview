import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        /* This allows us to use images from ANYWHERE on the net in the funnel preview.
           Not best security practice to be fair, but I don't see another way (unless we
           want to store those images on our servers?)
        */
        
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
