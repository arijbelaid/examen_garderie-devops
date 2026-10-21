/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  allowedDevOrigins: ['192.168.159.40'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // On utilise "backend" qui sera le nom du service dans Docker Compose
        destination: 'http://backend:5000/api/:path*', 
      },
    ];
  },
};
export default nextConfig;
