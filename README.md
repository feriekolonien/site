![Feriekolonien logo](/apps/web/public/logo.png)

This is the (new!) main repo for [Feriekolonien.no](https://feriekolonien.no)
and it's content.

## What's inside?

This turborepo uses [PNPM](https://pnpm.io/installation) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps/web`: A [Next.js](https://nextjs.org) app that's deployed to [feriekolonien.no](https://feriekolonien.no) with Vercel.
- `apps/studio`: A [Sanity studio](https://sanity.io) that's deployed to [studio.feriekolonien.no](https://studio.feriekolonien.no) with Vercel.
- `ui`: a stub React component library not currently used in any of the apps.
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/) 🔐

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (PNPM).

### Build

To build all apps and packages, run the following command:

```
gh repo clone feriekolonien/site
cd site
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd site
pnpm run dev
```

To develop on a single app, just `cd app/` into that application and run
commands as expected (`pnpm dev`, `pnpm add some-new-pkg` etc).

**Code style**

Your environment should be automatically set up if you're using VScode with the
Prettier and ESlint plugins installed.

These tools can also be ran with `pnpm test` in each app. This will run:

- `prettier --check`: To find code formatting issues.
- `eslint`: To find unused variables and other ESLint issues.
- `tsc --no-emit` To test TypeScript errors and module import issues.

**Commit style**

It's recommended to prefix commits with the app you are currently working on.
E.g.

`git commit -m "studio: upgrade Sanity dependencies"`

This will make it easier to read the commit history.

### Remote Caching

⚠️ **Remote caching is currently NOT set up for Feriekolonien**

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd site
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Turborepo Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
