import React from "react";
import "./techs.css";

export const Techs = () => {
  return (
    <section id="techs">
      <span className="skillTitle"> Skill's</span>

      <div className="outer">
        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/html-5.png" className="image" />
          </div>
          <p className="para">HTML</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/css-3.png" className="image" />
          </div>
          <p className="para"> Tailwind-CSS</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/js.png" className="image" />
          </div>
          <p className="para">Javascript</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/react.png" className="image" />
          </div>
          <p className="para">React</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/node.png" className="image" />
          </div>
          <p className="para">NodeJS</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/mongo.png" className="image" />
          </div>
          <p className="para">Mongodb</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/base.png" className="image" />
          </div>
          <p className="para"> SQL</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/git.png" className="image" />
          </div>
          <p className="para">Git HUb</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/cp.png" className="image" />
          </div>
          <p className="para">C++</p>
        </div>

        <div className="cards">
          <div className="images">
            <img alt="" src="/Images/c.png" className="image" />
          </div>
          <p className="para">C language</p>
        </div>
      </div>

      
    </section>
  );
};
export default Techs;
