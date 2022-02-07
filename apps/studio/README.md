![Logo of the project](./static/logo-feriekolonien-white.png)

# Feriekolonien CMS &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/feriekolonien/cms/blob/master/LICENSE)

> Repository for Feriekoloniens CMS (powered by Sanity.io)

This project backs most content (soon to be) available on [feriekolonien.no](http://feriekolonien.no/)

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
Add content using the online editor Sanity Studio available on [feriekolonien.sanity.studio/](https://feriekolonien.sanity.studio/).

### Built With

Sanity.io and React

### Building and deploying

Sanity.io hosts both the Studio and the dataset for us. To build and deploy the Studio:

```shell
sanity deploy
```

This builds and uploads the built files to Sanity's own servers. After a while it will be available on [feriekolonien.sanity.studio/](https://feriekolonien.sanity.studio/).

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
