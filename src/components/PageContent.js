import colors from '../styles/colors';

export const PageContent = ({
  children,
  bgColor = 'white',
  color = colors.darkBlue,
}) => {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className={`${color} center relative`}>
      <div className="measure-wide center ph3 pt4 pb4 f3">{children}</div>
    </section>
  );
};
