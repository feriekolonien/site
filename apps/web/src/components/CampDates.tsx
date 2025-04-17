import siteConfig from '../../siteConfig';
import Card from './Card';

const CampDates = () => (
  <div className="group relative mb-11 max-w-sm text-white">
    <Card className="absolute inset-0 mx-auto rotate-[-8deg] opacity-70 transition-all duration-300 ease-in-out group-hover:-rotate-3 md:ml-0" />
    <Card className="relative mx-auto shadow-xl md:ml-0">
      <h2 className="mb-4 text-3xl font-bold ">Datoer for 2025</h2>

      {siteConfig.getDates().length ? (
        <ul className="text-base  md:text-xl">
          {siteConfig.getDates().map((el) => (
            <li key={el.name}>
              <p className="flex">
                <span className="mr-4 text-3xl">{el.emoji}</span>
                <span className="font-semibold tracking-tight">
                  {el.name}
                </span>: {el.dateRange}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="">Kommer snart...🎅</p>
      )}
      {/* <p className="mt-2">Påmeldingen åpner 24. desember</p> */}
    </Card>
  </div>
);

export default CampDates;
