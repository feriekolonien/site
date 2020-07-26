import Head from 'next/head';

const Page = ({ children, title = 'Trefoldighet Feriekoloni' }) => {
  const description =
    'Trefoldighet Feriekoloni på Filtvet er Norges eldste aktive feriekoloni! I 130 år har barn og unge vært på ferie hos oss. Bli med neste sommer!';

  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta key="og:title" property="og:title" content={title} />
        <meta key="description" property="description" content={description} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
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

        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons/css/tachyons.min.css"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </main>
  );
};

export default Page;
