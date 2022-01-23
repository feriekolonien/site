type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={[
        '',
        'transition-all duration-150',
        'font-bold bold text-xl px-8 py-2 rounded-full text-[#332A00] bg-gradient-to-tr from-[#FC9C0C] to-[#FFD930]',
        'hover:bg-yellow-300 hover:bg-blend-multiply active:bg-blend-multiply active:bg-yellow-400',
      ].join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
