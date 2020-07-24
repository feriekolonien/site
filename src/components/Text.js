export const Text = ({ children, pseudo = false, size = 'f4' }) => {
  if (pseudo && typeof children === 'string') {
    return <p className="fw3 lh-copy">{localize(children)}</p>;
  }
  return <p className={`fw3 lh-copy ${size}`}>{children}</p>;
};
