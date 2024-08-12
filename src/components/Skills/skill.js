import React from "react";
import "./skill.css";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I Do.</span>
      {/* <span className='skillDesc'>lorem51</span> */}
      <div className="skillBars">
        <div className="skillBar">
          <img src="/Images/stack.avif" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2 className="heading">MERN Stack Developer</h2>
            <p className="skillBarPara">Basic structure of website</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/content.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2 className="heading">Content Writer</h2>
            <p className="skillBarPara">Presntation of the website</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/editing.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2 className="heading">Video Editior</h2>
            <p className="skillBarPara">Brain of the Website</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/programming.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2 className="heading">Programmer</h2>
            <p className="skillBarPara">Competative programming enahnces my problerm solving ability</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Skill;
