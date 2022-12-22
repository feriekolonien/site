import Head from 'next/head';

type PageProps = {
  children: React.ReactNode;
  title?: string;
  style?: object;
};
const Page = ({
  children,
  title = 'Trefoldighet Feriekoloni',
  style,
}: PageProps) => {
  const description =
    'Trefoldighet Feriekoloni på Filtvet er Norges eldste aktive feriekoloni! I 130 år har barn og unge vært på ferie hos oss. Bli med neste sommer!';

  return (
    <main className="overflow-hidden px-3 bg-primary-3" style={style}>
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
