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
            <p className="skillBarPara">By using these technologies, I create amazing websites.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/programming.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2 className="heading">Programming</h2>
            <p className="skillBarPara">Programming is beneficial for the good problem solving skills.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/editing.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2 className="heading">Video Editing</h2>
            <p className="skillBarPara">I aslo do video editing for my Youtube videos.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src="/Images/content.jpeg" alt="" className="skillBarImg"/>
          <div className="skillBarText">
            <h2 className="heading">Content Writing</h2>
            <p className="skillBarPara">I love writting becuase it gives the power to express your feelings.</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Skill;
