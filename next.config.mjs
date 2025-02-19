/**
 * @format
 * @type {import('next').NextConfig}
 */

export default {
  images: {
    domains: ["stage-user-kyc.s3.eu-west-1.amazonaws.com"],
  },
  webpack(
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Important: return the modified config
    return config;
  },
  async redirects() {
    return [
      {
        source: "/landing",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};
