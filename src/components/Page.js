import Head from 'next/head';

const Page = ({ children, title = 'Feriekolonien' }) => {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
