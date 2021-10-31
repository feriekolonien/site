function formatNumber(number: string, type?: 'cell') {
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

export const AddressLink = ({
  children,
  href: string,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a className="f5 link dim black-70" {...rest}>
    {children}
  </a>
);

export const Phone = ({
  children,
  type,
  ...rest
}: {
  children: string;
  type?: 'cell';
  title: string;
}) => {
  return (
    <AddressLink href={`tel:${children}`} {...rest}>
      {formatNumber(children, type)}
    </AddressLink>
  );
};

export const Office = ({ children }: { children: React.ReactNode }) => (
  <article className="flex-auto w-50">
    <address className="fs-normal">{children}</address>
  </article>
);

export const AddressLine = ({ children }: { children: React.ReactNode }) => (
  <span className="f5 db black-70 lh-copy">{children}</span>
);
