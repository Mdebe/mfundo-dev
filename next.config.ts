/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // required for static hosting
  images: {
    unoptimized: true, // REQUIRED for static export
  },
  trailingSlash: true, // helps avoid routing issues on hosting
};

module.exports = nextConfig;