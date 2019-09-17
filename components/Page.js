import Navigation from "../components/Navigation";

const Page = ({ children }) => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      {children}
      <footer>
        <ul>
          <li>
            <a href="/">Hjem</a>
          </li>
          <li>
            <a href="/om">Om oss</a>
          </li>
          <li>
            <a href="/historie">Historien</a>
          </li>
          <li>
            <a href="/galleri">Galleri</a>
          </li>
          <li>
            <a href="/kontakt">Kontakt</a>
          </li>
          <li>
            <a href="/soknadsskjema">Søknadsskjema</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Page;
