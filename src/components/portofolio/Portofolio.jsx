import React from "react";
import "./portofolio.css";
import IMG from "../../assets/portfolio.jpg";

const Portofolio = () => {
  const projects = [
    {
      id: 1,
      image: IMG,
      title: "Project 1",
      github: "https://www.github.com",
      liveLink: "https://www.dribbble.com",
    },
    {
      id: 2,
      image: IMG,
      title: "Project 2",
      github: "https://www.github.com",
      liveLink: "https://www.dribbble.com",
    },
    {
      id: 3,
      image: IMG,
      title: "Project 3",
      github: "https://www.github.com",
      liveLink: "https://www.dribbble.com",
    },
  ];
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.image} alt="" />
              </div>

              <h3>{project.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={project.github}
                  className="btn "
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={project.liveLink}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
