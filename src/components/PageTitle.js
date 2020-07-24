export const PageTitle = ({ children, color = 'white-90' }) => {
  return (
    <h1 className={`f-subheadline-ns fw6 mb0 lh-title mb5 ${color}`}>
      {children}
    </h1>
  );
};
