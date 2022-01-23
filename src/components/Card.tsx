type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={[
        'py-7 px-6 rounded-xl bg-gradient-to-tr from-[#2C72AC] to-[#46B3D9] ',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default Card;
