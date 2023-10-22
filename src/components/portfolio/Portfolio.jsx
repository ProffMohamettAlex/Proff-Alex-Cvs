import React from 'react';
import IMG1 from '../../assets/bookstore.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Web Design',
      img: IMG1,
      description:
        'Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips',
      technologies: 'React | Wordpress | Front End',
      link: 'https://proff-alex-cvs.vercel.app/',
      github: 'https://proff-alex-cvs.vercel.app/',
    },
    {
      id: 2,
      title: 'Graphic Designer',
      img: IMG4,
      description:
        'Plans and illustrates concepts by designing rough layouts of art and copy regarding arrangement, size, type size and style, and related aesthetics.',
      technologies: 'illustrator | Photoshop',
      link: 'https://proff-alex-cvs.vercel.app/',
      github: 'https://proff-alex-cvs.vercel.app/',
    },
    {
      id: 3,
      title: 'Google ads',
      img: IMG2,
      description: 'The ad starts off with a great call to action, hire the BEST, not just anyone. It also reinforces it by calling them experts in their field, which also adds another level of trust. The description underneath goes into more detail about their service and the benefits it offers such as a “pool of professionals and agencies”. By convincing buyers they’ll get more work done for less than they’re paying now, this is a great way to get them interested. A call to action that strong will at least tickle some user’s interest and make them click. This is exactly what the ad is meant to do and why it’s a great example of a Google ad.',
      technologies: 'GoogLe Ads info | Expert Eng',
      link: 'https://proff-alex-cvs.vercel.app/',
      github: 'https://proff-alex-cvs.vercel.app/',
    },
    {
      id: 4,
      title: 'Web Development',
      img: IMG3,
      description:
        'The web developer is responsible for planning and developing software solutions and web applications, supporting and maintaining a company’s websites and digital products. The day-to-day work of the web developer highly depends on constantly evolving internet innovations. Providing a targeted web developer job description and salary range information can help you attract top talent Use this web developer job description template to create your own personalized job posting. Take the basic structure and revise each section with specific job requirements that match your company For more great ideas check out our web developer job listings',
      technologies: 'Full Front End | Full Backend ',
      link: 'https://proff-alex-cvs.vercel.app/',
      github: 'https://proff-alex-cvs.vercel.app/',
    },
    {
      id: 5,
      title: 'E-Commerce App',
      img: IMG5,
      description:
        'A mobile commerce app, often known as an eCommerce app, is a piece of software that lets customers explore and purchase items from an online store using their smartphones or tablets. ',
      technologies: 'Flutter | Wordpress | JavaScript',
      link: 'https://proff-alex-cvs.vercel.app/',
      github: 'https://proff-alex-cvs.vercel.app/',
    },
    {
      id: 6,
      title: 'CCtv Settings',
      img: IMG6,
      description:
        'As a CCTV technician at service you will be responsible for the installation, configuration, and maintenance of our CCTV systems. You will work with our team of security experts to ensure that our systems are up-to-date and functioning properly. In addition, you will be responsible for training our security staff on how to use the CCTV systems. The ideal candidate will have experience with CCTV systems and networking, as well as a strong understanding of security protocols. He or she will be detail-oriented and able to work independently.',
      technologies: 'Technical skills | Communication skills | Problem-solving skills | Ability to work independently',
      link: 'https://proff-alex-cvs.vercel.app/',
      github: 'https://proff-alex-cvs.vercel.app/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Service</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Visit Website
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Buy Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
