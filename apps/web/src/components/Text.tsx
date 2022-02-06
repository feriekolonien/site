export const Text = ({
  children,
  size = 'f4',
}: {
  children: React.ReactNode;
  size?: string;
}) => <p className={`fw3 lh-copy ${size}`}>{children}</p>;
