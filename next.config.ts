import type { NextConfig } from "next";

const nextConfig: NextConfig & { turbopack?: unknown } = {

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        // Ensure Turbopack emits JS so imports behave like components.
        as: "*.js",
      },
    },
  },

   webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // reactStrictMode: true, // mantém React Strict Mode
  // async headers() {
  //   const csp = [
  //     "default-src 'self';",
  //     "script-src 'self';",
  //     "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
  //     "img-src 'self' data: https:;",
  //     "font-src 'self' https://fonts.gstatic.com;",
  //     "frame-ancestors 'none';",
  //   ].join(" ");

  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         { key: "Content-Security-Policy", value: csp },
  //         { key: "X-Frame-Options", value: "DENY" },
  //         { key: "X-Content-Type-Options", value: "nosniff" },
  //         { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
  //         { key: "Permissions-Policy", value: "geolocation=(), microphone=()" },
  //         { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  //         { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  //         { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
