import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>

        <span className="introtext">
          I'm <span className="introName">Shudhanshu Arya</span> <br /> <ReactTypingEffect
                      text={[" Web Developer.", " Programmer.", " Content Writer.", "Video Editior."]}
                      speed={100}
                      eraseSpeed={100}
                      eraseDelay={1000}
                      typingDelay={1000}
                    />
{" "}
        </span>
        <p className="introPara">
          I am a passionate web developer with full of skills and ambitions
          looking <br />
          for the great oppurtinity.
        </p>
        <Link>
          <button className="btn">
            <img src="/assets/hireme.png" alt="" className="btnImg" /> Hire Me{" "}
          </button>
        </Link>
      </div>
      <img src="/Images/introoo.png" alt="" className="bg" />

      {/* <link src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></link>
    <div>
      var typed = new Typed('#element', {
            strings: ['Web Developer', 'Programmer', 'Content Writter', 'Youtube creator.'],
            typeSpeed: 50,
        });
    </div> */}
    </section>
  );
};

export default Intro;
