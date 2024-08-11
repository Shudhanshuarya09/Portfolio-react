import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div>
        <img  src="/Images/about.jpg" alt="" className="aboutImg"/>
      </div>
      <div>
        <h1 className="aboutHeading">About Me</h1>
        <p className="aboutPara"> lorem51</p>
      </div>
    </section>
  );
};

export default About;
