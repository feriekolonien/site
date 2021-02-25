const Footer = ({ bgColor = 'white', color = 'mid-gray' }) => {
  return (
    <footer
      style={{ backgroundColor: bgColor }}
      className={`ph3 ph5-m ph6-l pt4 pb4 ${color}`}>
      <small className="f6 db tc">
        <span className="ttu">FILTVET FERIEKOLONI</span>{' '}
        {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
