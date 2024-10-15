import "../App.css";
import Countdown from "./countdown";

const Home = () => {
  return (
    <div>
      <div className="image"></div>
      <div className="text">
        <p
          className="front-italic"
          style={{ fontSize: "60px", width: "280px", margin: "0" }}
        >
          Nos casamos
        </p>
        <p
          className="font-regular-space"
          style={{ fontSize: "25px", letterSpacing: "2px", margin: "0" }}
        >
          ALAIN & LAURA
        </p>
      </div>
      {/* Page content container*/}
      <div style={{ margin: "auto 23px" }}>
        <div style={{ margin: "auto 30px" }}>
          <p
            className="front-italic"
            style={{
              fontSize: "45px",
              margin: "18px 0px 10px 0",
              textAlign: "center",
              color: "#414343",
            }}
          >
            ¡Estás invitado!
          </p>
          <p
            className="font-regular-2"
            style={{
              fontSize: "15px",
              margin: "0",
              textAlign: "center",
              color: "#414343",
            }}
          >
            Nos encantaría que seas parte de este momento tan especial para
            nosotros. ¡Falta poco!
          </p>
        </div>
        <Countdown />
      </div>
    </div>
  );
};

export default Home;
