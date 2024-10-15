/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "graph.org",
      },
      {
        protocol: "https",
        hostname: "envs.sh",
      },
    ],
  },
};

export default nextConfig;
