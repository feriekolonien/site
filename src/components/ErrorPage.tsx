// @flow
import React from 'react';
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
    <div className="flex justify-center items-center pv6 pv7-ns">
      <h1 className="f3 error-status pv2 pr3">{title}</h1>
      <p className="ml3">{children}</p>
    </div>
    <Footer />
  </Page>
);

export default ErrorPage;
