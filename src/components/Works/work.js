import React from "react";
import "./work.css";

const Work = () => {
  return (
    <section id="works">
      <h1 className="worksTitle">My Projects</h1>
      <span className="worksDesc"></span>
      <div className="worksImages">
        <img src="/Images/P1.png" alt="" className="worksImage" />
        <img src="/Images/P2.png" alt="" className="worksImage" />
        <img src="/assets/portfolio-3.png" alt="" className="worksImage" />
        <img src="/assets/portfolio-4.png" alt="" className="worksImage" />
        <img src="/assets/portfolio-5.png" alt="" className="worksImage" />
        {/* <img src="/assets/portfolio-6.png" alt="" className="worksImage" /> */}
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Work;
