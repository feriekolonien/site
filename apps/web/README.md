![Feriekolonien logo](./public/logo.png)

# Feriekolonien Web &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/feriekolonien/web/blob/master/LICENSE)

> Repository for Feriekoloniens frontend (powered by [NextJS](https://nextjs.org/))

This project organizes the pages and styles available on [feriekolonien.no](http://feriekolonien.no/)

### Getting started

```sh
git clone git@github.com:feriekolonien/web.git
cd web && yarn install
```

This will clone the repo and install dependencies.

Next, configure environment variables:

```sh
cp dev-template.env .env
```

This copies the template variables (Sanity configuration) to a new file called `.env`.

After this, you should be able to start the local development server:

```sh
yarn dev
```

This starts the NextJS with hot module reloading (HMR)

### Built With

- **Next.js with Typescript**, check out their [docs for more info](https://nextjs.org/docs/getting-started).

- Styling is done with [TailwindCSS](https://tailwindcss.com/).
- Style guide and linting: ESLint and Prettier. It's recommended that you set up
  your editor with and ESLint and Prettier extension. This will automatically highlight issues and automatically format your code. Even Tailwind classnames will be sorted as we're using the `prettier-plugin-tailwindcss` package.

To run the TypeScript compiler, run ESlint and check formatting, run:

```sh
yarn test # this will run "yarn prettier && yarn eslint && yarn ts"
```

We should probably set this up with a pre-push hook, but that's TODO.

### Building and deploying

This site is built and hosted on Vercel. We use their Github integration to automatically build and deploy on every commit. Just push a branch and Vercel will give comment a preview URL on your Github PR where you can see your changes.

When pushing to master changes are automatically deployed to production.

To get access to the Vercel account, ask [@rix1](https://github.com/rix1).

### CI/CD

We havent set this up yet.

### Licensing

[MIT Licence](https://github.com/feriekolonien/cms/blob/master/LICENSE)
