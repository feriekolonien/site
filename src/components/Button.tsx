type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="font-bold bold text-xl px-8 py-2 rounded-full text-[#332A00] bg-gradient-to-tr from-[#FC9C0C] to-[#FFD930]">
      {children}
    </button>
  );
};

export default Button;
