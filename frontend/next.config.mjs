/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  allowedDevOrigins: ['192.168.159.40'],
  // On dit à Next.js de rediriger /api vers notre backend Express
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.159.40:5000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
