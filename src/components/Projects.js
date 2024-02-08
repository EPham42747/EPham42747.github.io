import React from "react";
import "../styles/Projects.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import lockIn from "../images/projects/lockin.jpeg";
import portfolio from "../images/projects/portfolio.png";


export default function Projects() {
  const projects = [
    {
      image: portfolio,
      title: "Portfolio Website",
      description: "Where you are right now!",
      technology: "React",
      github: "https://github.com/EPham42747/EPham42747.github.io",
    },
    {
      image: lockIn,
      title: "LockIn - Image Processing",
      description: "Detecting loss of focus with the OpenCV library.",
      technology: "Python, OpenCV",
      github: "https://github.com/D-SehKim/LockIn"
    },
    {
      image: "",
      title: "More Coming Soon!",
      description: "",
      technology: "",
      github: "",
    }
  ];

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      
      <Slider className="projects-carousel" {...settings}>
        {projects.map((item) =>
          <ProjectCard image={item.image} title={item.title} description={item.description} technology={item.technology} github={item.github} />
        )}
      </Slider>
    </div>
  );
}

function ProjectCard({image, title, description, technology, github}) {
  const style = (image) => ({
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url(${image})`
  });

  return (
    <div className="project-card-container" style={style(image)}>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <p className="project-text white">{title}</p>
      </a>
      <p className="project-text white">{description}</p>
      <p className="project-text white">{technology}</p>
    </div>
  );
}