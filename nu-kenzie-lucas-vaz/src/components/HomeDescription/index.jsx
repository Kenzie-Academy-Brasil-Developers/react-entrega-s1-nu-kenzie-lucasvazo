import "./index.css";
import nuKenzie from "./img/nuKenzie.png";

const HomeDescription = ({ setLanding, isLanding }) => {
  const goToDashboard = () => setLanding(!isLanding);

  return (
    <div className="container">
      <img src={nuKenzie} alt="Logomarca da Nu Kenzie" />
      <p>Centralize o controle das suas finanças</p>
      <span>de forma rápida e segura</span>
      <button onClick={goToDashboard} type="button">
        Iniciar
      </button>
    </div>
  );
};

export default HomeDescription;
