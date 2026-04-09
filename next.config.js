/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    // 移除 unoptimized，启用自动图片优化
    domains: [],
    formats: ['image/avif', 'image/webp'], // 优先使用AVIF，回退到WebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 移动端设备尺寸
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // 小图标尺寸
    minimumCacheTTL: 60 * 60 * 24 * 365, // 缓存1年
    qualities: [75, 85, 90], // 支持的图片质量等级
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // 性能优化
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // 输出文件追踪根目录（解决警告）
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      { source: '/blinds', destination: '/custom-curtains-sheers', permanent: true },
      { source: '/blinds-solutions', destination: '/custom-curtains-sheers', permanent: true },
      { source: '/curtains-sheers', destination: '/custom-curtains-sheers', permanent: true },
      {
        source: '/hardware-systems',
        destination: '/custom-curtains-sheers#hardware-motorisation',
        permanent: true,
      },
      { source: '/mastery-workshop', destination: '/trade-projects', permanent: true },
      {
        source: '/motorisation',
        destination: '/custom-curtains-sheers#hardware-motorisation',
        permanent: true,
      },
      {
        source: '/outdoor-solutions',
        destination: '/cushions-soft-furnishings',
        permanent: true,
      },
      { source: '/quote', destination: '/contact#project-enquiry', permanent: true },
      { source: '/services', destination: '/trade-projects', permanent: true },
      {
        source: '/tracks-motorisation',
        destination: '/custom-curtains-sheers#hardware-motorisation',
        permanent: true,
      },
      { source: '/trade', destination: '/trade-projects', permanent: true },
      { source: '/trimmings', destination: '/decorative-trimmings', permanent: true },
      { source: '/wholesale-fabrics', destination: '/collections', permanent: true },
    ];
  },
  // 安全 Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
