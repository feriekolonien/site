function formatNumber(number, type) {
  if (type === 'cell') {
    return [number.slice(0, 3), number.slice(3, 5), number.slice(5)].join(' ');
  }
  return [
    number.slice(0, 2),
    number.slice(2, 4),
    number.slice(4, 6),
    number.slice(6),
  ].join(' ');
}

export const AddressLink = ({ children, ...rest }) => (
  <a className="f5 link dim black-70" {...rest}>
    {children}
  </a>
);

export const Phone = ({
  children,
  type,
  ...rest
}: {
  children: React.ReactNode;
  type?: 'cell';
  title: string;
}) => {
  if (typeof children !== 'string') {
    throw new Error(`Only strings allowed as children. Got ${typeof children}`);
  }
  return (
    <AddressLink href={`tel:${children}`} {...rest}>
      {formatNumber(children, type)}
    </AddressLink>
  );
};

export const Office = ({ children }) => (
  <article className="flex-auto w-50">
    <address className="fs-normal">{children}</address>
  </article>
);

export const AddressLine = ({ children }) => (
  <span className="f5 db black-70 lh-copy">{children}</span>
);
