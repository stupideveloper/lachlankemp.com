/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: 'cloudinary',
  //   path: 'https://res.cloudinary.com/lkemp/image/upload/',
  // },
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
