![Logo of the project](./static/logo-feriekolonien-white.png)

# Feriekolonien CMS &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/feriekolonien/cms/blob/master/LICENSE)

> Repository for Feriekoloniens CMS (powered by Sanity.io)

This project backs most content available on [feriekolonien.no](http://feriekolonien.no/)

### Prerequisites

Here's a what you need to get started:

1. Access to [the dataset](https://manage.sanity.io/). Ask @rix1 for access.

### Getting started

```sh
npm install -g @sanity/cli

git clone git@github.com:feriekolonien/cms.git
cd cms && yarn install
```

This will install the sanity command line interface globally, clone the repo and install dependencies.

```sh
yarn dev # this starts the studio and connects it to the development dataset
```

### Developing

Edit schemas in this repository to create new content types.
Add content using the online editor Sanity Studio available on [studio.feriekolonien.no/](https://studio.feriekolonien.no/).

### Built With

Sanity.io and React

### Building and deploying

The studio is deployed with Vercel. A new build will be scheduled for each commit to Github.

After a while it will be available on [studio.feriekolonien.no/](https://studio.feriekolonien.no/).

### Backup & update dev with production data

In `package.json` we have defined two backup scripts:

- `yarn run backup:prod`
- `yarn run backup:dev`

To update the `development` dataset with data from the `production` dataset (or
vice-versa), first run one of the commands above. After backup is completed, run
the following command to import the dataset:

```shell
yarn sanity dataset import backups/<REPLACE_WITH_TODAYS_DATE>prod.tar.gz development --replace
```

### Licensing

[MIT Licence](https://github.com/feriekolonien/cms/blob/master/LICENSE)
