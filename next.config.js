/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*"],
  },
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  reactStrictMode: true,
};

module.exports = nextConfig;
