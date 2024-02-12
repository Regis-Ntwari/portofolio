import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What do I offer?</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed an E-Commerce application which incorporates user
                feedback in real time.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Built an audio player which plays offline songs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed a todo list in which every user can create and
                complete tasks.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed a real time dashboard which provides analytics and
                business intelligence for an E-commerce application
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Enhanced this portfolio to be captivating and user-friendly.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Devops</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Deployed a webapp on Azure kubernetes service with databases in
                different regions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Wrote a terraform script to reusability of the infrastructure.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Perform CI/CD actions using Github actions.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
