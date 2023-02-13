import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Fashion collection website(price tracker)",
    github:
      "https://https://github.com/hxueqi/amazing-fashion-amazing-price.git.com/hxueqi",
    demo: "https://dribbble.com/shots/20519635-4FWEARS-Fashion-Landing-Page",
  },
  {
    id: 2,
    image: IMG2,
    title: "Road trip planner",
    github: "https://github.com/CodeOp-tech/ReadySetDrive.git",
    demo: "https://dribbble.com/shots/20519635-4FWEARS-Fashion-Landing-Page",
  },
  {
    id: 3,
    image: IMG3,
    title: "To do list",
    github: "https://github.com/CodeOp-tech/fs22-milestone-four-hxueqi.git",
    demo: "https://dribbble.com/shots/20519635-4FWEARS-Fashion-Landing-Page",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/hxueqi",
  //   demo: "https://dribbble.com/shots/20519635-4FWEARS-Fashion-Landing-Page",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/hxueqi",
  //   demo: "https://dribbble.com/shots/20519635-4FWEARS-Fashion-Landing-Page",
  // },
];

export const Portfolio = () => {
  return (
    <section id="portofolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
