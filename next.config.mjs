/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Transform sub-html in subfolders with index.html
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "raw.githubusercontent.com",
    //     pathname: "**",
    //   },
    // ],
    loader: "custom",
    loaderFile: "./src/app/images.js",
  },
};

export default nextConfig;
