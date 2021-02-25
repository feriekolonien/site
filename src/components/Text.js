export const Text = ({ children, size = 'f4' }) => {
  return <p className={`fw3 lh-copy ${size}`}>{children}</p>;
};
