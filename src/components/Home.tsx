import "../App.css";
import Countdown from "./countdown";
import { Button } from "antd";
import { IconGift, IconRing, IconVideoCamara, IconCamara } from "./Icons.tsx";
import paris from "../assets/paris.avif";
import venecia from "../assets/venecia.avif";
import suiza from "../assets/suiza.webp";

const Home = () => {
  const urlLocation = "https://maps.app.goo.gl/UWv4aHCJVo2TCDZ59";
  const urlAlbum = "https://photos.app.goo.gl/k8VyvV2XNEG1CQU8A";
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
              onClick={() => window.open(urlLocation, "_blank")}
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
            Tu presencia en nuestra boda es lo más importante. <br />
            Si quieres ayudarnos a financiar nuestra luna de miel te agradecemos
            mucho por ello! <br />
            <br />
            Estamos listos para celebrar el amor con una luna de miel en Europa
            ️✨ Con tu ayuda, estos son algunos de los planes que podríamos
            hacer:
            <br />
          </p>
          <div className="slider">
            <img src={paris} />
            <img src={venecia} />
            <img src={suiza} />
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
          background: "#cdbda3",
          padding: "20px 0",
        }}
      >
        <IconCamara width={"80px"} height={"80px"} />
        <p
          className="font-regular-2"
          style={{
            fontSize: "21px",
            textAlign: "center",
            color: "white",
            margin: "10px",
          }}
        >
          COMPARTE FOTOS
        </p>
        <p
          className="font-regular-2"
          style={{
            fontSize: "17px",
            textAlign: "center",
            color: "white",
            margin: "10px",
          }}
        >
          ¡Sube fotos de la boda al álbum!
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Button
            type="primary"
            size="large"
            onClick={() => window.open(urlAlbum, "_blank")}
            style={{
              background: "transparent",
              borderColor: "#ffffff",
              borderRadius: "4px",
              padding: "0 30px",
              //width: "200px",
            }}
          >
            IR AL ÁLBUM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
