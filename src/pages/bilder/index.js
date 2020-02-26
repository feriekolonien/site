import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';

import Page from '../../components/Page';
import {
  HeroImage,
  HeroContent,
  PageTitle,
} from '../../components/PageComponents';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { fetchSanityDocument } from '../../lib/sanity';
import SanityImage from '../../components/SanityImage';

const evenOddClasses = (number, classes) => {
  const isEven = number % 2;
  if (isEven) {
    return classes[0];
  }
  return classes[1];
};

const AlbumList = () => {
  const { data, error } = useSWR(
    /* groq */ `*[_type == "album"]
    {title, "coverPhoto": images[0]{asset -> {...}}}`,
    fetchSanityDocument,
  );

  return (
    <Page title="Bilder">
      <HeroImage>
        <Navigation />
        <HeroContent>
          <PageTitle>Bilder fra feriekolonien</PageTitle>
        </HeroContent>
      </HeroImage>

      {error && <div>Kunne ikke hente album</div>}
      {!data && <div>Laster album...</div>}

      <section className="mw7 center avenir">
        <article className="bt bb b--black-10">
          {data &&
            data.map((album, index) => (
              <Link key={album.title} href={`/bilder/${album.title}`}>
                {/* eslint-disable-next-line */}
                <a className="db pv4 ph3 ph0-l no-underline black dim">
                  <div className="flex flex-column flex-row-ns">
                    <div
                      className={`mb4 mb0-ns w-100 w-40-ns ${evenOddClasses(
                        index,
                        ['order-1 pl  3-ns', 'order-0 pr3-ns'],
                      )}`}>
                      <SanityImage image={album.coverPhoto} />
                    </div>
                    <div
                      className={`w-100 w-60-ns ${evenOddClasses(index, [
                        'order-0 pr3-ns',
                        'order-1 pl3-ns',
                      ])}`}>
                      <h1 className="f3 fw1 baskerville mt0 lh-title">
                        {album.title}
                      </h1>
                      <p className="f6 f5-l lh-copy">
                        {album.description}
                        Dagene går unna på feriekolonien og aktivitetsnivået er
                        høyt mellom frokost, lunsj og middag. Etter kveldsmaten
                        så roer det seg, og vi har fine stunder sammen med bok,
                        småprat eller sang på rommene før leggetid.
                      </p>
                      {/* Note: Author is not used/supported yet */}
                      <p className="f6 lh-copy mv0">
                        {album.author}
                        Rikard Eide
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
        </article>
      </section>
      <Footer />
    </Page>
  );
};

export default AlbumList;
