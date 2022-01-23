import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="nb-NO">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

          <link
            rel="preload"
            href="/fonts/raleway-v22-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/raleway-v22-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/montserrat-v21-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/montserrat-v21-latin-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <meta property="og:site_name" content="Trefoldighet Feriekoloni" />

          <meta
            property="og:image"
            content="https://feriekolonien.no/static/img/social-card.jpg"
          />
          <meta property="og:url" content="https://feriekolonien.no" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://feriekolonien.no/static/img/social-card.jpg"
          />

          <script async data-api="/_hive" src="/bee.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
