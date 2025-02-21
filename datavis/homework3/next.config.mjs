/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/prod", // Match your subfolder name
  assetPrefix: "/prod/", // Ensures assets load correctly
  output: "export" // Ensures static export
};

export default nextConfig;
