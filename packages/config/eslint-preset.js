module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
  },
};

/**
 *     "@otovo/eslint-config-otovo": "^3.0.0",
    "babel-eslint": "^10.0.3",
    "eslint": "^6.6.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-prettier": "^6.5.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-react": "^7.16.0",
 */

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
