import React from "react";
import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pyn5gck",
        "template_nyc0b85",
        form.current,
        "jDSe6SCSvrW63n_Ux1XJ_"
      )

      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!');
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="experience">
        <h2 className="experienceHeading">My Experience's</h2>
        <p className="experienceDesc">
          {" "}
          I have completed my training, internships at various company's and the
          platform. I also contributed to the open source cummunity like a
          ssoc'24.
        </p>
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
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            className="name"
            name="your_name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="email"
            name="your_email"
          />
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
            <a href="https://www.linkedin.com/in/aryashudhanshu09/"> <img
              src="/Images/linkdin.png" 
              alt="https://www.linkedin.com/in/aryashudhanshu09/"
              className="link" 
            /></a>
            <a href="https://github.com/Shudhanshuarya09"><img src="/Images/git.jpg" alt="" className="link" /></a>
            <img src="/Images/image.jpg" alt="" className="link" />
            <img src="/Images/yt.jpg" alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
