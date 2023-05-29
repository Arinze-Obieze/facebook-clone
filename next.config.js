/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbdx.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig
