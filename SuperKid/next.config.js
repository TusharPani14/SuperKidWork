/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  async rewrites() {
    return [
      {
        source: '',
        destination: 'https://sandbox.cashfree.com/pg/links',
      },
    ];
  },
};

module.exports = nextConfig
