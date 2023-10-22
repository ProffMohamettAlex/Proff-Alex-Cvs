import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <h4>I’m Full Stack Developers work in the IT department of a company performing both front- and back-end operations on websites and computer systems. They design front-end website architecture and work closely with the Graphic Designers in the company to ensure website applications collaborate well with their design elements. Full Stack Developers often oversee an entire project from start to finish.
They evaluate the needs of users and analyze any technical issues to program highly functional systems. Full Stack Developers are also responsible for staying updated on developments in web applications and constantly train themselves to learn new coding languages.</h4>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro



// spent the last several months in a remote environment, working with HTML, CSS, JavaScript, building everything from landing pages to APIs. My experience as a teacher in an international school helped me collaborate with fellow developers from all over the world. Additionally, working with kids isn’t an easy task, however, it has helped me become efficient, productive, and fast even in a very stressful environment, which is an important skill in the tech industry.