import React from "react";
import "./skill.css";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I Do</span>
      {/* <span className='skillDesc'>lorem51</span> */}
      <div className="skillBars">
        <div className="skillBar">
          <img src="/Images/stack.avif" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>MERN Stack Developer</h2>
            <p>Basic structure of website</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/content.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Content Writer</h2>
            <p>Presntation of the website</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/editing.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Video Editior</h2>
            <p>Brain of the Websirte</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/competative.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>CP</h2>
            <p>Competative programming enahnces my problerm solving ability</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
