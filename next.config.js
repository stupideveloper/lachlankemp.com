/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/lkemp/image/upload/',
=======
  // images: {
  //   loader: 'cloudinary',
  //   path: 'https://res.cloudinary.com/lkemp/image/upload/',
  // },
  images: {
    domains: ['res.cloudinary.com'],
>>>>>>> 37cd1d48382be700cddd9ec143de566a64ae4635
  },
}

module.exports = nextConfig
