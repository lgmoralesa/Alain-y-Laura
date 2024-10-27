import "../App.css";
import Countdown from "./countdown";
import { Button } from "antd";
import { IconGift, IconRing } from "./Icons.tsx";

const Home = () => {
  const url = "https://maps.app.goo.gl/UWv4aHCJVo2TCDZ59";
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
        <div style={{ margin: "auto 30px" }}>
          <div style={{ textAlign: "center", margin: "40px 0px 10px 0px" }}>
            <IconRing width={"80px"} height={"80px"} />
          </div>
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
            <br />
            Salón El Bosque
            <br />
            Te esperemos el
          </p>

          <div className="container-date">
            <p
              className="font-regular"
              style={{
                fontSize: "23px",
              }}
            >
              23 MARZO
            </p>

            <div className="vertical-line"></div>
            <p
              className="font-regular"
              style={{
                fontSize: "23px",
              }}
            >
              4:00 PM
            </p>
          </div>
          <p
            className="font-regular-2"
            style={{
              fontSize: "17px",
              margin: "20px 0 0 0",
              textAlign: "center",
              color: "#414343",
            }}
          >
            Km 1,5 Via Cota-Siberia
            <br />
            Cota, Cundinamarca
          </p>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <Button
              type="primary"
              size="large"
              onClick={() => window.open(url, "_blank")}
              style={{
                background: "#cdbda3",
                borderRadius: "4px",
                padding: "0 30px",
                //width: "200px",
              }}
            >
              VER UBICACIÓN
            </Button>
          </div>
          <div style={{ textAlign: "center", margin: "40px 0px 10px 0px" }}>
            <IconGift width={"80px"} height={"80px"} />
          </div>
          <p
            className="font-section-bold"
            style={{
              fontSize: "23px",
              letterSpacing: "3px",
              margin: "0",
              textAlign: "center",
            }}
          >
            REGALOS
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
            Lo más importante es tu presencia, pero si deseas hacernos un regalo
            aquí tienes nuestros datos
          </p>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <Button
              type="primary"
              size="large"
              onClick={() => window.open(url, "_blank")}
              style={{
                background: "#cdbda3",
                borderRadius: "4px",
                padding: "0 30px",
                //width: "200px",
              }}
            >
              VER DATOS BANCARIOS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
