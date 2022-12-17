import siteConfig from '../../siteConfig';
import Card from './Card';

const CampDates = () => (
  <div className="group relative mb-11 max-w-sm">
    <Card className="absolute inset-0 mx-auto rotate-[-8deg] opacity-70 transition-all duration-300 ease-in-out group-hover:-rotate-3 md:ml-0" />
    <Card className="relative mx-auto shadow-xl md:ml-0">
      <h2 className="mb-4 text-3xl font-bold text-white">Datoer for 2022</h2>

      <ul className="text-base text-white md:text-xl">
        {siteConfig.dates.map((el) => (
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
    </Card>
  </div>
);

export default CampDates;
