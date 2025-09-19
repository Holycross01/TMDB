/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ENDPOINT: process.env.MOVIE_PUBLIC_ENDPOINT,
    NEXT_API_TOKEN: process.env.MOVIE_API_TOKEN,

  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**', // This allows all poster/backdrop paths
      },
    ],
  },
};

export default nextConfig;
