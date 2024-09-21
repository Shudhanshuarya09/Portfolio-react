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
      <span className="titlee">My Projects</span>
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
                  {/* <button className="buton">Read More</button> */}
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
    img: "/Images/p2.png",  // Images should be placed in the public/Images folder
    review: "Sharpcode is a fully responsive website built using the MERN stack. It offers internships and a variety of courses, making it an excellent platform for learners and professionals alike.",
  },
  {
    name: "Techfest SLIET",
    img: "/Images/p1.png",
    review: "Developed a fully-featured website for SLIET's Techfest using the MERN stack. The site manages event registrations, schedules, and updates, offering a dynamic, user-friendly experience for participants and organizers.",
  },
  {
    name: "Portfolio Website",
    img: "/Images/p1.png",
    review: "Created a fully responsive personal portfolio website showcasing my frontend skills. Built using React, JavaScript, and Tailwind CSS, it highlights my projects, experience, and technical expertise.",
  },
 
  {
    name: "College Search",
    img: "/Images/college.png",
    review: "Built a fully responsive college search website that filters top colleges based on user preferences, location, and ranking. Designed to help students find the best college tailored to their needs..",
  },
  {
    name: "BMI Calculator",
    img: "/Images/bmi.png",
    review: "Developed a fully responsive BMI Calculator website using JavaScript and Tailwind CSS. The site takes user inputs for weight and height, then calculates and displays the BMI result instantly.",
  },
  {
    name: "Car Showcase",
    img: "/Images/car.png",
    review: "Developed a fully responsive car showcase website using JavaScript and Tailwind CSS. The site features multiple sections and allows users to book tickets for car races seamlessly.",
  },
  
];

export default Project;
