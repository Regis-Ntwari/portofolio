import React from "react";
import "./about.css";
import Profile from "../../assets/profile.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Profile} alt="About pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Services</h5>
              <small>3</small>
            </article>
            <article className="about__card">
              <VscFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>
            Software engineer with professional experience in the real-world.
            Holder of a masters degree at Carnegie Mellon University.
            Problem-solving and analytical thinking which boosts every project
            being undertaken
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
