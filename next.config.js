/** @type {import('next').NextConfig} */
const nextConfig = {
    //   eslint: {
    //     ignoreDuringBuilds: true,  // TODO: remove this could be a breaking change
    //   },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    };

module.exports = nextConfig;
