const dates = [
  { name: '🔆 1. parti', from: 'tirsdag 21. juni', to: ' fredag 1. juli' },
  { name: '🦀 2. parti', from: 'fredag 8. juli', to: ' mandag 18. juli' },
  { name: '🛶 3. parti', from: 'mandag 25. juli', to: ' torsdag 4. august' },
];

const CampDates = () => (
  <div className="order-2 order-0-ns mb3 tl">
    <h2 className="mv0 f3">Datoer for 2022</h2>

    <div className="">
      <ul className="pl0 mt3 list">
        <style jsx>
          {`
            li {
              line-height: 1.8;
            }
            .cancelled {
              text-decoration: line-through;
            }
          `}
        </style>

        {dates.map((el) => (
          <li key={el.name}>
            <span className="fw8 tracked-tight">{el.name}</span>: {el.from} -{' '}
            {el.to}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CampDates;
