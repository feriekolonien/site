import Head from 'next/head';

const Page = ({
  children,
  className = '',
  title = 'Trefoldighet Feriekoloni',
}) => {
  const description =
    'Trefoldighet Feriekoloni på Filtvet er Norges eldste aktive feriekoloni! I 130 år har barn og unge vært på ferie hos oss. Bli med neste sommer!';

  return (
    <main className={className}>
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
      </Head>
      {children}
    </main>
  );
};

export default Page;
