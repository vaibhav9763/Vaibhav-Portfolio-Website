import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";

// import logo
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Degree</h5>
              <small>B-Tech in CSE</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Project</h5>
              <small>3+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5></h5>
              <small>80+ complete</small>
            </article>
          </div>
          <p>
            My name is vaibhav baghdane. I am 2022 passout from pes college of
            enginerring.I am well familar with forend technology.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
