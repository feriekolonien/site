import Card from './Card';

const dates = [
  { emoji: '🦀', name: '1. parti', from: '21. juni', to: '1. juli' },
  { emoji: '☀️', name: '2. parti', from: '8. juli', to: '18. juli' },
  { emoji: '🐚', name: '3. parti', from: '25. juli', to: '4. august' },
  // { name: '🔆 1. parti', from: 'tirsdag 21. juni', to: ' fredag 1. juli' },
  // { name: '🦀 2. parti', from: 'fredag 8. juli', to: ' mandag 18. juli' },
  // { name: ' 3. parti', from: 'mandag 25. juli', to: ' torsdag 4. august' },
];

const CampDates = () => (
  <div className="group relative mb-11 max-w-sm">
    <Card className="absolute inset-0 mx-auto rotate-[-8deg] opacity-70 transition-all duration-300 ease-in-out group-hover:-rotate-3 md:ml-0" />
    <Card className="relative mx-auto shadow-xl md:ml-0">
      <h2 className="mb-4 text-3xl font-bold text-white">Datoer for 2022</h2>

      <ul className="text-base text-white md:text-xl">
        {dates.map((el) => (
          <li key={el.name}>
            <p className="flex">
              <span className="mr-4 text-3xl">{el.emoji}</span>
              <span className="font-semibold tracking-tight">
                {el.name}
              </span>: {el.from} - {el.to}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  </div>
);

export default CampDates;
