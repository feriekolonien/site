export const PageContent = ({ children, className = 'color-0 bg-white' }) => {
  return (
    <section className={`${className} center relative`}>
      <div className="measure-wide center ph3 pt4 pb4 f3">{children}</div>
    </section>
  );
};
