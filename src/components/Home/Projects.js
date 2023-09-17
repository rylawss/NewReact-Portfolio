import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Projects() {
  return (
    <Carousel>
      <div>
        <img src="https://picsum.photos/800/300/?random" />
        <div className="legend">
          <ul>
            <li>
              <a href="https://google.com"> Github </a>
            </li>
            <li>
              <a href="https://google.com">Deployed Website</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src="https://picsum.photos/800/301/?random" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/302/?random" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default Projects;
