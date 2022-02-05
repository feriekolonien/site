type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={[
        'rounded-xl bg-gradient-to-tr from-[#2C72AC] to-[#46B3D9] py-7 px-6 ',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default Card;
