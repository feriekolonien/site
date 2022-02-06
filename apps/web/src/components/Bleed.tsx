type BleedProps = {
  children: React.ReactNode;
  className?: string;
};
/**
 * Bleed: A way to compensate for the default padding on a site, creating
 * edge-to-edge full-width content
 */
const Bleed = ({ children, className }: BleedProps) => {
  return (
    <div className={['-mx-4', className].join(' ')}>
      <div className="px-3">{children}</div>
    </div>
  );
};

export default Bleed;
