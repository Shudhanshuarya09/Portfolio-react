import React from "react";
import "./project.css";

export const Project = () => {
  return (
    <section id="Project">
      <h4 className="titlee">My Projects</h4>
      <div className="outer">
        <div className="inner">
          {data.map((d) => (
            <div className="card">
              <div className="imagesss">
                <img src={d.img} alt="" className="photo"/>
              </div>

              <div className="discribe">
                <p>{d.name}</p>
                <p>{d.review}</p>
                <button className="buton">Read MOre</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    name: "sharpcode",
    img: "./Images/p1.png",
    review: "Lorem ipsum 50 sdjgisdsidoufgsduisdbkfjsgduiwefjwekgeuifemhfiusfnashfyofwenfwefgweiegifleuftgf",
  },
  {
    name: "techfest sliet",
    img: "./Images/p2.png",
    review: "Lorem ipsum 50",
  },
  {
    name: "bmi calculator",
    img: "./Images/programming.jpeg",
    review: "Lorem ipsum 50",
  },
];

export default Project;
