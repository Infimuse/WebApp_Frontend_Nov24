import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    domains: [
      "links.papareact.com",
      "images.unsplash.com",
      "randomuser.me",
      "www.pexels.com",
      "infimuse.s3.amazonaws.com",
      "images.pexels.com",
      "drive.google.com",
    ],
  },
};

export default nextConfig;
