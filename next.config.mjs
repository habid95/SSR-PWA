/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: false, // Cambiar a false para desactivar el modo estricto
  distDir: "build",
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  }
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})(nextConfig);
