import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import SulyMusicplayer from "../../Assets/Suly-music-banniere.png";
import portfolio from "../../Assets/portfolio.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SulyMusicplayer}
              isBlog={false}
              title="Suly Music Player"
              description="Material You Design music player for Android"
              ghLink="https://github.com/suleymanlaarabidev/Suly-Music"
              demoLink="https://t.me/SulyMusicPlayer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My self coded personal website build with React.js"
              ghLink="https://github.com/suleymanlaarabidev/Portfolio"
              demoLink="https://github.com/suleymanlaarabidev/Portfolio"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
