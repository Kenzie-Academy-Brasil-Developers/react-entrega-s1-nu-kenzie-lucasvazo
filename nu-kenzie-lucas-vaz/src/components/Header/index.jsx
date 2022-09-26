import logoKenzie from "./img/nuKenzieDark.png";
import "./index.css";

const Header = ({ isLanding, setLanding }) => {
  const goToLandPage = () => {
    setLanding(!isLanding);
  };

  return (
    <header className="headerDashboard">
      <img src={logoKenzie} alt="Logotipo Nu Kenzie" />
      <button onClick={goToLandPage} className="buttonGeneral">
        Início
      </button>
    </header>
  );
};

export default Header;
