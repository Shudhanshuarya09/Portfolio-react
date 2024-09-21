import React from "react";
import "./project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="Project">
      <h4 className="titlee">My Projects</h4>
      <div className="outer">
        <div className="inner">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div className="card" key={index}>
                <div className="imagesss">
                  <img src={d.img} alt={d.name} className="photo" />
                </div>
                <div className="discribe">
                  <p className="project-name">{d.name}</p>
                  <p className="project-review">{d.review}</p>
                  <button className="buton">Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    name: "Sharpcode",
    img: "/Images/p1.png",  // Images should be placed in the public/Images folder
    review: "Lorem ipsum 50 sdjgisdsidoufgsduisdbkfjsgduiwefjwekgeuifemhfiusfnashfyofwenfwefgweiegifleuftgf",
  },
  {
    name: "Techfest SLIET",
    img: "/Images/p2.png",
    review: "Lorem ipsum 50",
  },
  {
    name: "BMI Calculator",
    img: "/Images/programming.jpeg",
    review: "Lorem ipsum 50",
  },
];

export default Project;
