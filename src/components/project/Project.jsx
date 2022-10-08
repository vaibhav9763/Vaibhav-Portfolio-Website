import React from "react";
import "./Project.css";

import { GrPersonalComputer } from "react-icons/gr";

const Project = () => {
  return (
    <section id="project">
      <h5>Project i made</h5>
      <h2>Project </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Portfolio Website Using React </h3>
          </div>
          <ul className="service__list">
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>Single page website Using Html, Css , JavaScript , ReactJs </p>
            </li>

            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>Personal Portfolio Website </p>
            </li>
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>Live Hosted Website Using Github</p>
            </li>
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <a href="https://vaibhav9763.github.io/vaibhav-portfolio/">
                Website Link
              </a>
            </li>
          </ul>
        </article>
        {/* end of ui xi  */}
        <article className="service">
          <div className="service__head">
            <h3>Github User Searcher</h3>
          </div>
          <ul className="service__list">
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>Github user search website we can easily find the user</p>
            </li>
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>Using Html , React Js , Bootstrap</p>
            </li>
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <a href="https://github.com/vaibhav9763/Github-user-search">
                Project Link
              </a>
            </li>
          </ul>
        </article>

        {/* end of ui xi  */}
        <article className="service">
          <div className="service__head">
            <h3>Weather App Using React JS</h3>
          </div>
          <ul className="service__list">
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>Online Weather App To Find Current Weather</p>
            </li>
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>With The Help Of Online Weather Api This Website Wrok</p>
            </li>
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>Technology : Html , Bootstrap , Api , React js</p>
            </li>
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <p>We Can Easily Find Live Weather Of Any City </p>
            </li>
            <li>
              <GrPersonalComputer className="service__list-icon" />
              <a href="https://github.com/vaibhav9763/weather-app ">
                Project Link
              </a>
            </li>
          </ul>
        </article>
        {/* end of ui xi  */}
      </div>
    </section>
  );
};

export default Project;
