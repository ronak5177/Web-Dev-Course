/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.vectorstock.com',
          port: '', 
        },
      ],
    },
};

export default nextConfig;