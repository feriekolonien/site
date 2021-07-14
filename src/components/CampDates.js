const CampDates = () => {
  return (
    <div className="order-2 order-0-ns mb3">
      <h2 className="mv0 f3">Datoer for 2021</h2>

      <div className="flex justify-center-ns tl">
        <ul className="pl0 mt3">
          <style jsx>{`
            li {
              line-height: 1.8;
            }
            .cancelled {
              text-decoration: line-through;
            }
          `}</style>
          <li className="db">
            <span className="cancelled">
              <span className="b">1. parti:</span> Fredag 25. juni - Lørdag 3.
              juli
            </span>{' '}
            *
          </li>
          <li className="db">
            <span className="cancelled">
              <span className="b">2. parti:</span> Fredag 9. juli - Lørdag 17.
              juli
            </span>{' '}
            *
          </li>
          <li className="db">
            <span className="b">3. parti:</span> Torsdag 15. juli - Fredag 23.
            juli
          </li>
          <li className="db">
            <small>* Kansellert pga. COVID-19</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CampDates;
