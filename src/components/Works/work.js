import React from "react";
import "./work.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    // <section id="works">
    //   <h1 className="worksTitle">My Projects</h1>
    //   <span className="worksDesc"></span>
    //   <div className="worksImages">
    //   <img src="/Images/P2.png" alt="" className="worksImage" />
    //     <img src="/Images/P1.png" alt="" className="worksImage" />

    //     <img src="/Images/P2.png" alt="" className="worksImage" />
    //     <img src="/Images/P1.png" alt="" className="worksImage" />
    //     <img src="/Images/P2.png" alt="" className="worksImage" />

    //   </div>

    //   <button className="worksBtn">See More</button>
    // </section>

    <Slider {...settings}>
    <div id="works">
      <div className="card-wrapper">
        <ul className="card-list">
          <li className="card-item">
            <a href="#" className="card-link">
              <img
                src="/Images/P1.png"
                alt="card-image"
                className="card-image"
              />
              <p className="badge">MERN Stack</p>
              <h2 className="card-title"> Techfest'24 SLIET Weebsite </h2>
              <button className="card-button">Arow</button>
            </a>
          </li>
          <li className="card-item">
            <a href="#" className="card-link">
              <img
                src="/Images/P2.png"
                alt="card-image"
                className="card-image"
              />
              <p className="badge">MERN Stack</p>
              <h2 className="card-title"> Techfest'24 SLIET Website </h2>
              <button className="card-button">Arrow</button>
            </a>
          </li>

          <li className="card-item">
            <a href="#" className="card-link">
              <img
                src="/Images/P2.png"
                alt="card-image"
                className="card-image"
              />
              <p className="badge">MERN Stack</p>
              <h2 className="card-title"> Techfest'24 SLIET Website </h2>
              <button className="card-button">Arrow</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </Slider>
    //
  );
};

export default Work;
