import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suleyman Laarabi </span>
            from <span className="purple"> Pantin, France.</span>
            <br />I am a student in Marguerite Audoux High school from Gien
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Ice Hockey
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Suleyman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
