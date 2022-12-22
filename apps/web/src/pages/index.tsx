import Image from 'next/image';
import Link from 'next/link';
import Snowfall from 'react-snowfall';
import siteConfig from '../../siteConfig';
import Bleed from '../components/Bleed';
import { ButtonLink } from '../components/Button';
import CampDates from '../components/CampDates';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import LandingPageVideo from '../components/LandingPageVideo';
import Navigation from '../components/Navigation';
import Page from '../components/Page';
import WaveDivider from '../components/WaveDivider';

function HomePage() {
  const style = {
    '--primary-bg': '#2c72ac',
    '--primary-hover': 'white',
  } as React.CSSProperties;

  return (
    <div style={style}>
      <Page>
        <Snowfall />
        <Navigation />
        <div className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 pt-8 md:grid-cols-2">
          <div className="order-2 p-5 md:order-1">
            <Image
              className="mx-auto max-w-[200px] md:max-w-xs "
              src="/static/img/logo.png"
              width={320}
              height={435}
              alt="Kolomåke"
              unoptimized
              priority
            />
          </div>
          <div className="order-1 p-5 md:order-2 md:pl-0">
            <h1 className="mb-6 text-4xl font-semibold">
              Sommerferie på{' '}
              <span className="whitespace-nowrap">Filtvet Feriekoloni</span>
            </h1>
            <div className="mb-14 text-lg ">
              <p className="mb-4">
                Trefoldighet Feriekoloni er Norges eldste aktive feriekoloni –
                eller sommerleir om du vil!
              </p>
              <p>
                I over 130 år har barn og unge vært på ferie hos oss. Kanskje du
                også vil komme til sommeren?
              </p>
            </div>
            <CampDates />
            <div className="max-w-sm text-center md:text-right">
              {siteConfig.waitingListEnabled && (
                <p className="font-bold italic mr-4 mb-5 inline-block">
                  Vi har fulle partier, men søk gjerne og stå på venteliste. Det
                  kan bli ledige plasser.
                </p>
              )}
              {siteConfig.openForApplication && (
                <ButtonLink
                  href={siteConfig.applicationURL}
                  className="text-xl"
                >
                  Søk nå
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
        <Bleed className="relative bg-gradient-to-t from-[#2C72AC] to-[#46B3D9] pt-20 md:pt-40">
          <WaveDivider />
          <div className="mx-auto grid max-w-6xl gap-8 p-3 md:grid-cols-5 md:grid-rows-none md:p-0">
            <div className="md:col-span-3 md:ml-10">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Ofte stilte spørsmål
              </h2>
              <FAQ />
            </div>
            <div className="h-fit md:col-span-2 md:mr-10">
              <div className="max-w-sm">
                <LandingPageVideo />
                <p className="mt-3 text-center text-base text-white lg:text-lg">
                  <Link href="/bilder">
                    <a>
                      Se flere sommerminner fra{' '}
                      <span className="whitespace-nowrap">Filtvet →</span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <Footer className="mt-20 md:mt-44" showSand={true} />
        </Bleed>
      </Page>
    </div>
  );
}

export default HomePage;
