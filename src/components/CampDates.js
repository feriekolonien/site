const CampDates = () => {
  return (
    <>
      <h2 className="mb0 mt4 f3">Datoer for 2021</h2>

      <div className="flex justify-center-ns tl">
        <ul className="pl0 mt3">
          <style jsx>{`
            li {
              line-height: 1.8;
            }
          `}</style>
          <li className="db">
            <span className="b">1. parti:</span> Fredag 25. juni - Lørdag 3.
            juli
          </li>
          <li className="db">
            <span className="b">2. parti:</span> Fredag 9. juli - Lørdag 17.
            juli
          </li>
          <li className="db">
            <span className="b">3. parti:</span> Fredag 23. juli - Lørdag 31.
            juli
          </li>
        </ul>
      </div>
    </>
  );
};

export default CampDates;
