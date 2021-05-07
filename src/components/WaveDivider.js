const WaveDivider = ({ color = 'white', absolute }) => {
  return (
    <>
      <style jsx>{`
        svg {
          margin-bottom: -6px;
          margin-left: -10px;
          margin-top: auto;
        }
      `}</style>
      <svg
        viewBox="0 0 1367 120"
        className={absolute && 'absolute bottom-0'}
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill={color}
          d="m1.19 31.46c87.05 31.54 207.61 67.06 342 55.17 162.89-14.42 200.89-86.63 341-86.63 140.75 0 179.2 73 342 86.63 133 11.16 258.72-24.83 341-55.17v88.54h-1366.01c-2.66-20.06.01-68 .01-88.54z"
        />
      </svg>
    </>
  );
};

export default WaveDivider;
