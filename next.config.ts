import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Izinkan domain ImgBB
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'googleusercontent.com', // Izinkan domain Google (jika masih mau coba Drive)
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;