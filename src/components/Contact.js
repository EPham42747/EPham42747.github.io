import React from "react";
import "../styles/Contact.css";

import linkedin from "../images/contact/linkedin.svg";
import github from "../images/contact/github.svg";
import email from "../images/contact/email.png";

export default function Contact() {
  const socials = [
    {
      image: linkedin,
      alt: "Linkedin",
      link: "https://linkedin.com/in/ethancpham",
      color: "#0050bf"
    },
    {
      image: github,
      alt: "Github",
      link: "https://github.com/EPham42747",
      color: "rgb(200, 200, 200)"
    },
    {
      image: email,
      alt: "Email",
      link: "mailto:ethancpham@gmail.com",
      color: "rgb(200, 200, 200)"
    }
  ];

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-wrapper">
        {socials.map((item) => 
          <SocialButton image={item.image} alt={item.alt} link={item.link} color={item.color} />
        )}
      </div>
      
    </div>
  );
}

function SocialButton({image, alt, link, color}) {
  return (
    <div className="button-container" style={{backgroundColor: color}}>
      <a className="button" href={link} target="_blank" rel="noopener noreferrer">
        <img className="contact-image" src={image} alt={alt} />
      </a>
    </div>
  );
}