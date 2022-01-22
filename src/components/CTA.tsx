import React from 'react';

export const CTA = ({
  children,
  subtext,
}: {
  children: React.ReactNode;
  subtext?: React.ReactNode;
}) => (
  <div className="tc">
    <style jsx>
      {`
        a {
          background-color: var(--peach-3);
          font-weight: bold;
        }
      `}
    </style>
    <a
      data-splitbee-event="Sign up"
      className="f3 grow no-underline br-pill ph5 pv2 mb2 dib white mt3"
      href="/soknadsskjema"
    >
      {children}
    </a>
    {subtext && <span className="fw1 f5 mb4 lh-title db o-70">{subtext}</span>}
  </div>
);
