/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nusoft-website.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/animated-triangle.gif',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*/",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
};

export default nextConfig;
