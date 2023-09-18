import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bookSearch from "../../Assets/booksearch.PNG";
import urllsTavern from "../../Assets/UrllsTavern.PNG";
import employee from "../../Assets/EmployeeTracker.PNG";
import ecom from "../../Assets/EcomBackend.PNG";
import social from "../../Assets/SocialAPI.PNG";
import portfolio from "../../Assets/Portfolio.PNG";

function Projects() {
  return (
    <Carousel>
      <div>
        <img src={employee} />
        <p className="legend">
          <a href="https://github.com/rylawss/12-Employee-Tracker">
            Employee Tracker
          </a>
        </p>
      </div>
      <div>
        <img src={ecom} />
        <p className="legend">
          <a href="https://github.com/rylawss/13-E-commerce-Back-End">
            E-commerce Back-End
          </a>
        </p>
      </div>
      <div>
        <img src={social} />
        <p className="legend">
          <a href="https://github.com/rylawss/18-Social-Network-API">
            Social Network API
          </a>
        </p>
      </div>
      <div>
        <img src={bookSearch} />
        <p className="legend">
          <a href="https://github.com/rylawss/Book-Search-Engine">
            Book search engine
          </a>
        </p>
      </div>
      <div>
        <img src={urllsTavern} />
        <p className="legend">
          <a href="https://github.com/t3p3-TheConglomerate/UllrsTavern">
            UllrsTavern
          </a>
        </p>
      </div>
      <div>
        <img src={portfolio} />
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
