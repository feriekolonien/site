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
  <div className="relative group mb-11 max-w-sm">
    <Card className="absolute inset-0 rotate-[-8deg] group-hover:-rotate-3 opacity-70 transition-all ease-in-out duration-300 mx-auto md:ml-0" />
    <Card className="relative shadow-xl mx-auto md:ml-0">
      <h2 className="text-white font-bold text-3xl mb-4">Datoer for 2022</h2>

      <ul className="text-base md:text-xl text-white">
        {dates.map((el) => (
          <li key={el.name}>
            <p className="flex">
              <span className="text-3xl mr-4">{el.emoji}</span>
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
