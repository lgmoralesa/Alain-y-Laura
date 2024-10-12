import banner from "../assets/propuesta.jpg";
import banner2 from "../assets/propuesta2.jpg";
import "../App.css";
import Countdown from "./countdown";

const Home = () => {
  return (
    <div>
      <div className="image"></div>
      <div className="text">
        <h1>Nos casamos</h1>
        <p>Alain & Laura</p>
      </div>
      <div>
        <h2>¡Estás invitado!</h2>
        <p>
          Nos encantaría que seas parte de este momento tan especial para
          nosotros. ¡Falta poco!
        </p>
      </div>
      <Countdown />
    </div>
  );
};

export default Home;
