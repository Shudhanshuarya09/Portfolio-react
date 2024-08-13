import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="aboutImgDiv">
        <img  src="/Images/mee.jpeg" alt="" className="aboutImg"/>
       
      </div>
      <div>
      <h1 className="aboutHeading">About Me</h1>
        <p className="aboutPara"> 
      <div className="top">
      ● Pursuing a Bachelor of Engineering in Computer Science and Engineering.<br/>

● A-grade CBSE graduate with a strong academic background.<br/>
      </div>

<span className="title">● Skills:<br/></span>

<div className="text">
○ Proficient in web development using HTML, CSS, JavaScript, and frameworks.<br/>
○ Strong knowledge in Data Structures and Algorithms (DSA).<br/>
○ Skilled in video editing and content writing for YouTube.<br/>
</div>
<span className="title">● Experience:<br/></span>

<div className="text"> 
○ Developed multiple web applications with front-end and back-end expertise.<br/>
○ Managed and produced content for a YouTube channel.<br/>
</div>
<span className="title">● Passion:<br/></span>

<div className="text">
○ Committed to continuous learning and improvement.<br/>
○ Enthusiastic about open-source contributions and coding challenges.<br/>
</div>
<span className="title">● Additional Attributes:<br/></span>

<div className="text">
○ Strong problem-solving, communication, and teamwork skills.
</div>







 </p>
      </div>
    </section>
  );
};

export default About;
