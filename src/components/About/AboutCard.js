import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ryan Lawler </span>
            <span className="purple"> </span>
            <br />
            <br />
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I like webdev
            </li>
            <li className="about-activity">
              <ImPointRight /> I like to climb and play pickleball
            </li>
            <li className="about-activity">
              <ImPointRight />I like to play videogames
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
