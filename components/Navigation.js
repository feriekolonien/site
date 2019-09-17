import { useRouter } from "next/router";

const Navigation = () => {
  const { pathname } = useRouter();
  if (pathname === "/") {
    return "Filtvet Feriekoloni";
  }
  return <a href="/">👈 Tilbake</a>;
};

export default Navigation;
