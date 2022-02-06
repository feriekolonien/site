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

type AddressLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const AddressLink = ({ children, href, ...rest }: AddressLinkProps) => (
  <a
    className="hover:cursor-pointer hover:text-slate-500"
    href={href}
    {...rest}
  >
    {children}
  </a>
);

type PhoneProps = {
  children: string;
  type?: 'cell';
  title: string;
};

export const Phone = ({ children, type, ...rest }: PhoneProps) => {
  return (
    <AddressLink href={`tel:${children}`} {...rest}>
      {formatNumber(children, type)}
    </AddressLink>
  );
};
