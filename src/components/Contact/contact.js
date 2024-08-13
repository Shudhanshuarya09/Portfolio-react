import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="experience">
        <h2 className="experienceHeading">My Experience's</h2>
        <p className="experienceDesc"> hfuhsdo;fywerfhwefouhwifgfhfhwef</p>
        <div className="experienceImages">
          <img src="/Images/T.next.png" alt="" className="experienceImage" />
          <img src="/Images/infosys.png" alt="" className="experienceImage" />
          <img src="/Images/B.Intern.png" alt="" className="experienceImage" />
          <img src="/Images/hack.jpeg" alt="" className="experienceImage" />
          <img src="/Images/ssoc.png" alt="" className="experienceImage" />
          <img src="/Images/sliet.jpeg" alt="" className="experienceImage" />
        </div>
      </div>

      {/* Contact-section */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <form className="contactForm">
          <input type="text" placeholder="Your Name" className="name" />
          <input type="email" placeholder="Your Email" className="email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Messsage"
          />
          <button type="submit" value="send" className="contactBtn">
            Submit
          </button>
          <div className="links">
            <img src="/Images/linkdin.png" alt="https://www.linkedin.com/in/aryashudhanshu09/" className="link" />
            <img src="/Images/git.jpg" alt="" className="link" />
            <img src="/Images/image.jpg" alt="" className="link" />
            <img src="/Images/yt.jpg" alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
