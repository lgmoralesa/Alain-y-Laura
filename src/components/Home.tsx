import "../App.css";
import Countdown from "./countdown";
import { Button, Carousel, Collapse } from "antd";
import { IconGift, IconRing, IconCamara, IconLetter } from "./Icons.tsx";
import madrid from "../assets/madrid.avif";
import roma from "../assets/roma.jpg";
import florencia from "../assets/florencia2.jpg";
import venecia from "../assets/venecia.avif";
import chamonix from "../assets/chamonix.jpg";
import paris from "../assets/paris.avif";
import londres from "../assets/londres.jpg";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "21vh",
  width: "100%",
};

const Home = () => {
  const urlLocation = "https://maps.app.goo.gl/UWv4aHCJVo2TCDZ59";
  const urlAlbum = "https://photos.app.goo.gl/k8VyvV2XNEG1CQU8A";
  const urlPdf = "https://lgmoralesa.github.io/Alain-y-Laura/newspaper.pdf";
  const cities = [paris, venecia, roma, florencia, chamonix, londres, madrid];

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

      {/* Estás invitado */}
      <div style={{ margin: "auto 53px" }}>
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

      {/* Countdown */}
      <div style={{ margin: "auto 23px" }}>
        <Countdown />
      </div>

      {/* CEREMONIA */}
      <div style={{ margin: "auto 53px" }}>
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
      </div>

      {/* REGALOS */}
      <div style={{ margin: "auto 53px" }}>
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
          ️✨ Con tu ayuda, estos son algunos de los planes que podríamos hacer:
          <br />
        </p>
        <br />
        <Carousel
          arrows
          style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
          className="slick-list"
        >
          {cities.map((citie) => (
            <div key={citie}>
              <img src={citie} style={contentStyle} />
            </div>
          ))}
        </Carousel>
        <Collapse
          style={{
            borderColor: "#cdbda3",
            backgroundColor: "rgb(205 189 163 / 22%)",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            marginBottom: "30px",
          }}
          items={[
            {
              key: "1",
              label: "VER DATOS DE CUENTA",
              children: (
                <>
                  <p
                    className="font-regular-2"
                    style={{
                      fontSize: "15px",
                      margin: "10px",
                      color: "#414343",
                    }}
                  >
                    Lulo Bank - Cuenta de ahorros
                  </p>
                  <p
                    className="font-regular-2"
                    style={{
                      fontSize: "15px",
                      margin: "10px",
                      color: "#414343",
                    }}
                  >
                    No. 838 789 444 257
                  </p>
                  <p
                    className="font-regular-2"
                    style={{
                      fontSize: "15px",
                      margin: "10px",
                      color: "#414343",
                    }}
                  >
                    MARIA PATRICIA DEL PILAR SILVA BERNAL
                  </p>
                  <p
                    className="font-regular-2"
                    style={{
                      fontSize: "15px",
                      margin: "10px",
                      color: "#414343",
                    }}
                  >
                    C.C. 51 677 366
                  </p>
                </>
              ),
            },
          ]}
        />
      </div>

      {/* COMPARTE FOTOS */}
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

      {/* WEDDING POST */}
      <div style={{ margin: "auto 43px" }}>
        <div style={{ textAlign: "center", margin: "40px 0px 10px 0px" }}>
          <IconLetter width={"80px"} height={"80px"} />
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
          THE WEDDING POST
        </p>
        <object data={urlPdf} type="application/pdf">
          <iframe
            src={`https://docs.google.com/viewer?url=${urlPdf}&embedded=true`}
            width="100%"
            height="400px"
            style={{ marginTop: "20px" }}
          ></iframe>
        </object>

        <a href={urlPdf} target="_blank" rel="noopener noreferrer" download>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <Button
              type="primary"
              size="large"
              //onClick={() => window.open(urlLocation, "_blank")}
              style={{
                background: "#cdbda3",
                borderRadius: "4px",
                padding: "0 30px",
              }}
            >
              DESCARGAR
            </Button>
          </div>
        </a>
      </div>

      {/* TE ESPERAMOS */}
      <div
        style={{
          margin: "53px",
          textAlign: "center",
          color: "rgb(65, 67, 67)",
        }}
      >
        <p className="front-italic" style={{ fontSize: "50px", margin: "0" }}>
          Te esperamos
        </p>
        <p
          className="font-regular-space"
          style={{
            fontSize: "16px",
            letterSpacing: "2px",
          }}
        >
          ALAIN & LAURA
        </p>
      </div>
    </div>
  );
};

export default Home;
