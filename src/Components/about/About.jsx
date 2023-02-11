import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small>4+ years working</small>
          </article>
          <article className="about_card">
            <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className="about_card">
            <VscFolderLibrary className="about_icon" />
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>

          <p>
            *Collaborated in a team of three utilizing Agile methodology, built
            a full stack application using React.JS, Node.JS, MySQL, Bootstrap.
            Conceptualized technical design by creating user flow diagram,
            database design schema, REST APIs routes plan and full stack
            architecture. Integrated payment functionality using Stripe API.
            *Implemented user authentication/authorization on legacy code using
            Bcrypt, JSON Web Token, Node.JS and React.JS (React Router, Hooks,
            Context). *Developed 3 projects: an MVP, a Feature Extension, and a
            Group Project, using React.JS, MySQL, Node.JS (Express), HTML, CSS,
            Bootstrap and a front end MVP using several WEB API’s and user
            geolocation feature. *Collaborated in a team of three utilizing
            Agile methodology, built a full stack application using React.JS,
            Node.JS, MySQL, Bootstrap. Conceptualized technical design by
            creating user flow diagram, database design schema, REST APIs routes
            plan and full stack architecture. Integrated payment functionality
            using Stripe API. * Implemented user authentication/authorization on
            legacy code using Bcrypt, JSON Web Token, Node.JS and React.JS
            (React Router, Hooks, Context). *Developed 3 projects: an MVP, a
            Feature Extension, and a Group Project, using React.JS, MySQL,
            Node.JS (Express), HTML, CSS, Bootstrap and a front end MVP using
            several WEB API’s and user geolocation feature.
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
