/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/datavis/homework3/prod', // Sets the base path for your app
  assetPrefix: '/datavis/homework3/prod/', // Ensures assets are loaded correctly
};

export default nextConfig;
