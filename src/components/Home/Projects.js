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
        <img src="https://picsum.photos/800/301/?random" />
        <p className="legend">
          <a href="https://github.com/rylawss/12-Employee-Tracker">
            Employee Tracker
          </a>
        </p>
      </div>
      <div>
        <img src="https://picsum.photos/800/301/?random" />
        <p className="legend">
          <a href="https://github.com/rylawss/13-E-commerce-Back-End">
            E-commerce Back-End
          </a>
        </p>
      </div>
      <div>
        <img src="https://picsum.photos/800/301/?random" />
        <p className="legend">
          <a href="https://github.com/rylawss/18-Social-Network-API">
            Social Network API
          </a>
        </p>
      </div>
      <div>
        <img src="https://picsum.photos/800/301/?random" />
        <p className="legend">
          <a href="https://github.com/rylawss/Book-Search-Engine">
            Book search engine
          </a>
        </p>
      </div>
      <div>
        <img src="https://picsum.photos/800/301/?random" />
        <p className="legend">
          <a href="https://github.com/t3p3-TheConglomerate/UllrsTavern">
            UllrsTavern
          </a>
        </p>
      </div>
      <div>
        <img src="https://picsum.photos/800/301/?random" />
        <p className="legend">
          <a href="https://github.com/rylawss/NewReact-Portfolio">
            This sites repo
          </a>
        </p>
      </div>
    </Carousel>
  );
}

export default Projects;
