import "../App.css";
import Countdown from "./countdown";
import { Button, Carousel, Collapse } from "antd";
import { IconGift, IconRing, IconCamara, IconLetter } from "./Icons.tsx";
import madrid from "../assets/madrid.avif";
import venecia from "../assets/venecia.avif";
import chamonix from "../assets/chamonix.jpg";
import paris from "../assets/paris.avif";
import londres from "../assets/londres.jpg";
import savings from "../assets/savings.gif";
import dresscode from "../assets/dresscode-removebg.png";

const Home = () => {
  const urlLocation = "https://maps.app.goo.gl/UWv4aHCJVo2TCDZ59";
  const urlAlbum = "https://photos.app.goo.gl/k8VyvV2XNEG1CQU8A";
  const urlPdf = "https://lgmoralesa.github.io/Alain-y-Laura/newspaper.pdf";
  const cities = [paris, venecia, chamonix, londres, madrid];

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

      {/* Estás invitado */}
      <div className="section-invite">
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
      <div id="ceremony" style={{ margin: "auto 53px" }}>
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
            3:00 PM
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

      <div className="horizontal-line vertical-line-size"></div>

      {/* DRESS CODE */}
      <div id="dresscode" style={{ margin: "auto 40px" }}>
        <p
          className="font-section-bold"
          style={{
            fontSize: "23px",
            letterSpacing: "3px",
            margin: "0",
            textAlign: "center",
          }}
        >
          CÓDIGO DE
          <br />
          VESTIMENTA
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={dresscode} className="dresscode-image" />
        </div>
        <p
          className="front-italic"
          style={{
            fontSize: "38px",
            margin: "0",
            textAlign: "center",
            color: "rgb(178 155 117)",
          }}
        >
          Formal
        </p>

        <div style={{ display: "flex", margin: "20px 0px" }}>
          <div style={{ width: "50%", marginRight: "12px" }}>
            <p
              className="font-regular"
              style={{
                fontSize: "23px",
                textAlign: "center",
                margin: "10px 0 20px 0",
              }}
            >
              Ellos
            </p>
            <div
              className="font-regular-2"
              style={{
                fontSize: "17px",
                textAlign: "center",
                color: "#414343",
              }}
            >
              <p>Traje formal</p>
              <p>NO: Gris</p>
              <br />
              <p style={{ marginTop: "23px" }}>Corbata (opcional)</p>
            </div>
          </div>
          <div className="vertical-line" style={{ height: "250px" }}></div>

          <div style={{ width: "50%", marginLeft: "12px" }}>
            <p
              className="font-regular"
              style={{
                fontSize: "23px",
                textAlign: "center",
                margin: "10px 0 20px 0",
              }}
            >
              Ellas
            </p>
            <div
              className="font-regular-2"
              style={{
                fontSize: "17px",
                textAlign: "center",
                color: "#414343",
              }}
            >
              <p>Vestido largo</p>
              <p>NO: Blanco,Beige, Crema, Dorado, Plateado, Rosado</p>
              <p>Tacones (tacon ancho por el pasto)</p>
            </div>
          </div>
        </div>
        <p
          className="font-regular-2"
          style={{
            fontSize: "17px",
            margin: "30px 0",
            textAlign: "center",
            color: "#414343",
          }}
        >
          ¡Prepárate para brillar!
        </p>
      </div>

      <div className="horizontal-line vertical-line-size"></div>

      {/* REGALOS */}
      <div id="gifts" className="section-gifts">
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
          Tu presencia en nuestra boda es lo más importante. Si quieres
          ayudarnos a financiar nuestra luna de miel
          <br />
          ¡te agradecemos mucho por ello! <br />
          <br />
          Estamos listos para celebrar nuestro amor con una luna de miel en
          Europa. Con tu ayuda, estos son algunos de los planes que podríamos
          hacer:
          <br />
        </p>
        <Carousel
          arrows
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            marginTop: "25px",
          }}
          className="slick-list"
        >
          {cities.map((citie) => (
            <div key={citie}>
              <img src={citie} className="cities-images" />
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
          defaultActiveKey={["1"]}
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
                  <img src={savings} style={{ width: "100%" }} />
                </>
              ),
            },
          ]}
        />
      </div>

      {/* COMPARTE FOTOS */}
      <div
        id="album"
        style={{
          textAlign: "center",
          margin: "20px 0",
          background: "#cdbda3",
          padding: "20px 0",
        }}
      >
        <IconCamara width={"80px"} height={"80px"} />
        <p
          className="font-section-bold"
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
          className="font-regular"
          style={{
            fontSize: "17px",
            textAlign: "center",
            color: "white",
            margin: "10px",
          }}
        >
          ¡Sube fotos de la boda al álbum!
        </p>
        <div style={{ margin: "20px auto", width: "fit-content" }}>
          <Button
            type="primary"
            size="large"
            onClick={() => window.open(urlAlbum, "_blank")}
            style={{
              background: "transparent",
              borderColor: "#ffffff",
              borderRadius: "4px",
              padding: "0 30px",
            }}
          >
            IR AL ÁLBUM
          </Button>
        </div>
      </div>

      {/* WEDDING POST  */}
      <div id="newspaper" className="section-newspaper">
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
        <div className="iframe-movil">
          <object data={urlPdf} type="application/pdf">
            <iframe
              src={`https://docs.google.com/viewer?url=${urlPdf}&embedded=true`}
              width="100%"
              height="400px"
            ></iframe>
          </object>
        </div>

        <div className="iframe-desktop">
          <object
            data={urlPdf}
            type="application/pdf"
            width="100%"
            height="900px"
          >
            <iframe
              width="100%"
              src={`https://docs.google.com/viewer?url=${urlPdf}&embedded=true`}
            ></iframe>
          </object>
        </div>

        <a
          href={urlPdf}
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ display: "contents" }}
        >
          <div style={{ margin: "20px auto", width: "fit-content" }}>
            <Button
              type="primary"
              size="large"
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

      <div className="horizontal-line vertical-line-size"></div>

      {/* TE ESPERAMOS */}
      <div
        style={{
          margin: "20px auto 50px",
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
