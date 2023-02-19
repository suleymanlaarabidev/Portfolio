import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const navigate = useNavigate()
  return (
    <section>



      <Container fluid className="home-section" id="home">

        <Container className="home-content" style={{ zIndex: 10 }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SULEYMAN LAARABI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <button style={{marginTop:70}} onClick={() => { navigate("/contact") }} className="Home-Header-Contact-Button">Contact Me</button>
                <Particle />
                <button onClick={() => {
                  window.scrollTo(0, document.body.scrollHeight);
                }} className="Home-Header-Contact-Button">More</button>

              </div>


            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>

      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
