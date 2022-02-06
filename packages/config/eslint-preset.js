module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};

// Previous configuration that came with Turborepo
// module.exports = {
//   extends: ["next", "prettier"],
//   settings: {
//     next: {
//       rootDir: ["apps/*/", "packages/*/"],
//     },
//   },
//   rules: {
//     "@next/next/no-html-link-for-pages": "off",
//   },
// };
