import "../App.css";
import Countdown from "./countdown";
import rings from "../assets/rings.png";

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
          style={{
            fontSize: "23px",
            letterSpacing: "2px",
            margin: "-12px 0 0 0",
          }}
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
              fontSize: "17px",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0px",
          }}
        >
          <img
            src={rings}
            alt="rings"
            width="30%"
            height="30%"
            style={{ mixBlendMode: "multiply" }}
          ></img>
        </div>
        <div style={{ margin: "auto 30px" }}>
          <p
            className="font-section-bold"
            style={{
              fontSize: "23px",
              letterSpacing: "3px",
              margin: "0",
              textAlign: "center",
            }}
          >
            CEREMONIA
          </p>
          <p
            className="font-regular-2"
            style={{
              fontSize: "17px",
              margin: "20px 0 0 0",
              textAlign: "center",
              color: "#414343",
            }}
          >
            Hacienda Santa Elena
          </p>
          <p
            className="font-regular-2"
            style={{
              fontSize: "17px",
              textAlign: "center",
              color: "#414343",
            }}
          >
            Te esperemos el
          </p>
          <div className="container-date">
            <p
              className="font-regular-space"
              style={{
                fontSize: "23px",
              }}
            >
              23 MARZO
            </p>

            <div className="vertical-line"></div>
            <p
              className="font-regular-space"
              style={{
                fontSize: "23px",
              }}
            >
              4:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
