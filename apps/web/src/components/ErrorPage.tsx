// @flow
import Image from 'next/image';
import React from 'react';
import Card from './Card';
import FAQ from './FAQ';
import Footer from './Footer';
import Navigation from './Navigation';
import Page from './Page';

const ErrorPage = ({
  title,
  children,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <Page title="Ikke funnet">
    <Navigation />
    <article className="mx-auto mt-4 mb-10 max-w-4xl px-4 sm:px-6 md:px-8">
      <div className="relative block">
        <Image
          src="/static/img/about-us.jpg"
          alt="Historiefortelling på stranda"
          width="1365px"
          height="546px"
          className="rounded-xl object-cover brightness-50 grayscale"
          unoptimized
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="mb-3 text-3xl font-bold text-white md:text-5xl">
            {title}
          </h1>
          <p className="text-center text-xl text-white md:text-3xl">
            {children}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Card className="shadow-xl">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Ofte stilte spørsmål
          </h3>
          <FAQ />
        </Card>
      </div>
    </article>
    <Footer />
  </Page>
);

export default ErrorPage;
