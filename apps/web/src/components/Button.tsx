import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={[
        className,
        'font-bold',
        'transition-all duration-150',
        'rounded-full bg-gradient-to-tr from-[#FC9C0C] to-[#FFD930] px-8 py-2 text-[#332A00] ',
        'hover:bg-yellow-300 hover:bg-blend-multiply active:bg-yellow-400 active:bg-blend-multiply',
      ].join(' ')}
    >
      {children}
    </button>
  );
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const ButtonLink = ({ children, className, href }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <a
        className={[
          className,
          'font-bold',
          'transition-all duration-150',
          'rounded-full bg-gradient-to-tr from-[#FC9C0C] to-[#FFD930] px-8 py-2 text-[#332A00]',
          'hover:bg-yellow-300 hover:bg-blend-multiply active:bg-yellow-400 active:bg-blend-multiply',
          'leading-8',
        ].join(' ')}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
