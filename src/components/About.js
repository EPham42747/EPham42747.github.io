import React from "react";
import "../styles/About.css";

import pfp from "../images/about/pfp.jpg";

import react from "../images/about/react.svg";
import js from "../images/about/js.svg";
import python from "../images/about/python.svg";
import java from "../images/about/java.svg";
import unity from "../images/about/unity.svg";
import cSharp from "../images/about/c-sharp.svg";
import cPlusPlus from "../images/about/c++.svg";

export default function About() {
  const name = (
    <h1>Ethan Pham</h1>
  );
  const about1 = (
    <p>A <b>student</b>. A <b>problem solver</b>. An aspiring <b>software engineer</b>.</p>
  );
  const about2 = (
    <p>Hi there! I'm a student at the <b>University of Massachusetts Amherst</b> studying <b>computer science</b>. I'm facinated by all things tech and hope to apply what I learn to <b>high-impact</b>, <b>large-scale projects</b>.</p>
  );
  const about3 = (
    <p>Based in Framingham, MA.</p>
  );

  const techInfo = (
    <p className="tech-info">Here are some technologies I've been working with:</p>
  );
  const technologies = [
    {
      image: react,
      alt: "React"
    },
    {
      image: js,
      alt: "JavaScript"
    },
    {
      image: python,
      alt: "Python"
    },
    {
      image: java,
      alt: "Java"
    },
    {
      image: unity,
      alt: "Unity"
    },
    {
      image: cSharp,
      alt: "C#"
    },
    {
      image: cPlusPlus,
      alt: "C/C++"
    }
  ];

  return (
    <div className="about-container">
      <div className="bio-container">
        <div className="bio-wrapper">
          {name}
          {about1}
          {about2}
          {about3}
        </div>
        <div className="pfp-container">
          <img src={pfp} alt="Ethan Pham"></img>
        </div>
      </div>
      <div className="tech-container">
        <div className="tech-wrapper">
          {techInfo}
          <div className="tech-grid">
            {technologies.map((item) => (
              <TechnologyCard image={item.image} alt={item.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnologyCard({image, alt}) {
  return (
    <div className="tech-card">
      <img src={image} alt={alt} className="tech-image" />
      <p className="caption">{alt}</p>
    </div>
  );
}