![Logo of the project](./static/logo_white.png)

# Feriekolonien CMS &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/feriekolonien/cms/blob/master/LICENSE)

> Repository for Feriekoloniens CMS (powered by Sanity.io)

This project backs most content (soon to be) available on [feriekolonien.no](http://feriekolonien.no/)

## Getting started

Edit schemas in this repository to create new content types.
Add content using the online editor Sanity Studio available on [feriekolonien.sanity.studio/](https://feriekolonien.sanity.studio/).

## Developing

TODO

### Built With

Sanity.io and React

### Prerequisites

Here's a what you need to get started:

1. Access to [the dataset](https://manage.sanity.io/). Ask @rix1 for access.

### Setting up local dev environment

```shell
git clone https://github.com/feriekolonien/cms.git feriekolonien-cms
cd feriekolonien-cms/
yarn install
```

<!-- And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here. -->

### Building and deploying

Sanity.io hosts both the Studio and the dataset for us. To build and deploy the Studio:

```shell
sanity deploy
```

This builds and uploads the built files to Sanity's own servers. After a while it will be available on [feriekolonien.sanity.studio/](https://feriekolonien.sanity.studio/).

## Licensing

[MIT Licence](https://github.com/feriekolonien/cms/blob/master/LICENSE)
