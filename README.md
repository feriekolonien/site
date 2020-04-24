![Logo of the project]('./public/logo.png')

# Feriekolonien Web &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/feriekolonien/web/blob/master/LICENSE)

> Repository for Feriekoloniens frontend (powered by [NextJS](https://nextjs.org/))

This project organizes the pages and styles available on (soon to be) [feriekolonien.no](http://feriekolonien.no/)

### Getting started

```sh
git clone git@github.com:feriekolonien/web.git
cd web && yarn install
```

This will clone the repo and install dependencies.

```sh
yarn dev # this starts the NextJS with hot module reloading (HMR)
```

### Built With

NextJS, check out their [docs for more info](https://nextjs.org/docs/getting-started).

### Building and deploying

This site will probably be hosted using _Zeit's Now_ platform. To do this you first need deploy access. Ask @rix1 for help. Then, install the [now cli](https://zeit.co/download#now-cli):

```sh
npm i -g now
```

After that, everything you need to run the following command in the project root folder:

```sh
now
```

This will recognize the NextJS project, build it and upload the sources to Zeit's platform. The command will print a live URL where you can visit the site before it exits. After this you probably have to alias it to feriekolonien.no for it to be updated, but this is subject to change with the introduction to CI/CD.

### CI/CD

We havent set this up yet.

### Licensing

[MIT Licence](https://github.com/feriekolonien/cms/blob/master/LICENSE)
