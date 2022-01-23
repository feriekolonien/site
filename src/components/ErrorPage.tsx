// @flow
import React from 'react';
import { ButtonLink } from './Button';
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
  <Page>
    <Navigation />
    <article className="">
      <div className="aspect-w-10 aspect-h-4 block relative">
        <img
          src="/static/img/about-us.jpg"
          alt="Historiefortelling på stranda"
          width="1365px"
          height="546px"
          className="rounded-xl grayscale object-cover brightness-50"
        />

        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
            {title}
          </h1>
          <p className="text-white text-xl md:text-3xl text-center">
            {children}
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        <Card className="shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6">
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
