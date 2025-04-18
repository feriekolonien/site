import Image from 'next/image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Page from '../components/Page';

function GrasrotPage() {
  return (
    <div>
      <Page>
        <Navigation />
        <div className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 pt-8 md:grid-cols-2">
          <div className="order-2 p-5 md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Lag"
              className="rounded-lg shadow-lg"
              src="https://cdn.sanity.io/images/bvwemm0b/production/ce980062de02934e78d6e1fe70671ab57782cb45-5184x3456.jpg?w=1200&auto=format"
            />
            <div className="text-center flex flex-col items-center mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width={160}
                height={160}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoAQAAAABSnlx4AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAB3YoTpAAAAAd0SU1FB+kEEhYGFz8tJL0AAAKwSURBVHja7ZbbbuMwDET15/x0thtxhqQs34oW2IdREjuWjiWAlyGHvxlDtGjRokX/T/SYw76/89H88/h9s3+zc1X039Aj6Jg70pbXuTW3sM8RWBV9SnMepq32jtVLejpK9Ds6gtki1EuEn9DVrfMc0W/omIb23Nh7oc1Fv6ah3ld0XKMaeIh77HSmbKKTZr2k2uDfVXXdf0Q/p+vdyq/RHJR8ODR9OtdF7+lUddBpeb5nB/ozU2Qe+ST6p/Qo5s/4BkjH5euUexd9Tlf1doe9UTqN5m7VdTpu0vCQ4wXRT+hFubvJM74pVV5qBLIEu4k+pxHXow7jLQO80dHzQKcqbaLvaPQtxtRolrfqy/QPXzSIluiHdLEw9b1GeqOde0RVmHSe6KIv6Yz6LuAZ7Nbp2JIVuCRSVA3Rp3QNa5g3Q3uN75HZYeUg+tB7pyR6S48kYHn66KAnI9ueDW2i7+hWGrucYKnljocf0P/EOjcQfUE3/Sg0W5rRaYdCOTMIU+HfzB3RG7oNW6J8pX1xTCnKoh/RVU1KgSw1s/sy+52BCsxnCxUTfUFDfBbRJj3GKW3l2VidXfQNPRY6tcVQWzN3DJUgagU7SXMX/ZBeROQQ7KR9pWzOHSqz6D29Ee9sWQ72HvBWMGxlimtE39JNt6HdZSZpc3rDojSgToT4HDol0Wt/knSLazva29NZKMqZAPFH9BXddaNqdzH9jrZsgVryiH5DM6z39sZI71nkk3lJJdGnNG0dS6BbtB/oOCD3NH5EP6RRK0P097ThGi4inb95rugzGi4p9g6rZ7hvaGOi1O5H9EN6JI0rhLzFNxfDZ5ioL4t+QodbWCezHbykHb7KBlT0I5rWJdYqQdWqkYiFcqEUiL6msz8ZHEVf9v0JVAryBEb079KPh2jRokWL/jv6C2CGG8C61EuAAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA0LTE4VDIyOjA2OjIyKzAwOjAwA17fKQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNC0xOFQyMjowNjoyMiswMDowMHIDZ5UAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDQtMThUMjI6MDY6MjIrMDA6MDAlFkZKAAAAAElFTkSuQmCC
              "
                alt="QR-kode som lenker til https://www.norsk-tipping.no/grasrotandelen/for-lag-og-foreninger/vervebrev/918759905"
              />
              <span>Org.nr: 918759905</span>
            </div>
          </div>
          <div className="order-1 p-5 md:order-1 md:pl-0">
            <Image
              unoptimized
              width={170}
              height={40}
              alt="Logo for Norsk Tipping"
              src="https://www.norsk-tipping.no/staticimages/ntds/logos/norsktipping/norsktipping-full-color.svg?v1"
            />
            <h1 className="mb-6 text-4xl font-semibold mt-1">
              Støtt oss med din Grasrotandel!
            </h1>
            <div className="prose prose-lg">
              <p>
                Grasrotandelen gir deg som spiller hos Norsk Tipping mulighet
                til å bestemme hvem som skal motta noe av overskuddet til Norsk
                Tipping. Hver gang du spiller går inntil 7 prosent av din
                spillinnsats til den grasrotmottakeren du velger - uten at det
                går over din innsats, premie eller vinnersjanse. Vi oppfordrer
                deg til å støtte oss gjennom{' '}
                <strong>Trefoldighet Feriekoloni Venneforening</strong>.
              </p>
              <p>
                Du kan bli grasrotgiver i alle Norsk Tippings kanaler, ved å
                sende SMS «Grasrotandelen 918759905» til 60000, eller følge
                lenken under:
              </p>
              <p>
                👉{' '}
                <a
                  className="font-semibold"
                  href="https://www.norsk-tipping.no/grasrotandelen/din-mottaker/918759905"
                >
                  Trefoldighet Feriekoloni Venneforening
                </a>{' '}
                på <span className="whitespace-nowrap">Norsk-tipping.no</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Footer className="mt-20 md:mt-44" showSand={false} />
        </div>
      </Page>
    </div>
  );
}

export default GrasrotPage;
