const dates = [
  { emoji: '🦀', name: '1. parti', from: '21. juni', to: '1. juli' },
  { emoji: '☀️', name: '2. parti', from: '8. juli', to: '18. juli' },
  { emoji: '🐚', name: '3. parti', from: '25. juli', to: '4. august' },
  // { name: '🔆 1. parti', from: 'tirsdag 21. juni', to: ' fredag 1. juli' },
  // { name: '🦀 2. parti', from: 'fredag 8. juli', to: ' mandag 18. juli' },
  // { name: ' 3. parti', from: 'mandag 25. juli', to: ' torsdag 4. august' },
];
type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={[
        'py-7 px-6 rounded-xl bg-gradient-to-tr from-[#2C72AC] to-[#46B3D9] max-w-sm',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
};

const CampDates = () => (
  <div className="relative group mb-11">
    <Card className="absolute inset-0 rotate-[-8deg] group-hover:-rotate-6 opacity-70 transition-all" />
    <Card className="relative shadow-xl">
      <h2 className="text-white font-bold text-3xl mb-4">Datoer for 2022</h2>

      <div className="text-xl text-white">
        <ul className="">
          {dates.map((el) => (
            <li key={el.name} className="flex">
              <span className="text-3xl mr-4">{el.emoji}</span>
              <span className="font-bold tracking-tight">{el.name}</span>:{' '}
              {el.from} - {el.to}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  </div>
);

export default CampDates;
