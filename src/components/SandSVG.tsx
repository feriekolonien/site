type SandSVGProps = {};

const SandSVG = ({}: SandSVGProps) => (
  <svg
    width="1680"
    height="132"
    viewBox="0 0 1680 132"
    className="absolute bottom-0 left-0 right-0 z-10 h-24 w-full text-yellow-600/50 md:h-36"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <pattern
      id="dots"
      x="0"
      y="0"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse"
      fill="currentColor"
    >
      <circle id="" cx="3" cy="3" r="1"></circle>
      <circle id="" cx="13" cy="13" r="1"></circle>
    </pattern>

    <path
      d="M209.394 51.3645C111.693 55.7503 37.6978 35.5326 15.8489 33.4225C-6 31.3124 -9.5 33.4225 -9.5 33.4225V161L1688.48 147.553V9.50017C1688.48 -23.175 1384.95 42.8918 1291.39 33.4225C1197.83 23.9533 1012.14 17.9725 950.008 26.4451C887.873 34.9178 734.323 33.4225 558.632 26.4451C382.942 19.4677 331.52 45.8822 209.394 51.3645Z"
      fill="url(#sandGradient)"
    />
    <path
      d="M209.394 51.3645C111.693 55.7503 37.6978 35.5326 15.8489 33.4225C-6 31.3124 -9.5 33.4225 -9.5 33.4225V161L1688.48 147.553V9.50017C1688.48 -23.175 1384.95 42.8918 1291.39 33.4225C1197.83 23.9533 1012.14 17.9725 950.008 26.4451C887.873 34.9178 734.323 33.4225 558.632 26.4451C382.942 19.4677 331.52 45.8822 209.394 51.3645Z"
      opacity="0.5"
      fill="url(#dots)"
    />
    <defs>
      <linearGradient
        id="sandGradient"
        x1="0"
        y1="0"
        x2="0"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="30%" stopColor="#FFD930" />
        <stop offset="100%" stopColor="#FCA92B" />
      </linearGradient>
    </defs>
  </svg>
);

export default SandSVG;
