import React from "react";
import "./work.css";

const Work = () => {
  return (
    // <section id="works">
    //   <h1 className="worksTitle">My Projects</h1>
    //   <span className="worksDesc"></span>
    //   <div className="worksImages">
    //   <img src="/Images/P2.png" alt="" className="worksImage" />
    //     <img src="/Images/P1.png" alt="" className="worksImage" />
        
    //     <img src="/Images/P2.png" alt="" className="worksImage" />
    //     <img src="/Images/P1.png" alt="" className="worksImage" />
    //     <img src="/Images/P2.png" alt="" className="worksImage" />
       
    //   </div>

      

    //   <button className="worksBtn">See More</button>
    // </section>

    
      <div id="works">
        <div className="card-wrapper">
          <ul className="card-list">
           

            <li className="card-item">
              <a href="#" className="card-link">
                <img src="/Images/P1.png" alt="card-image" className="card-image"/>
                <p className="badge">MERN Stack</p>
                <h2 className="card-title"> Techfest'24 SLIET Website </h2>
                <button className="card-button">Arrow_Forward</button>
              </a>
            </li>
            <li className="card-item">
              <a href="#" className="card-link">
                <img src="/Images/P2.png" alt="card-image" className="card-image"/>
                <p className="badge">MERN Stack</p>
                <h2 className="card-title"> Techfest'24 SLIET Website </h2>
                <button className="card-button">Arrow_Forward</button>
              </a>
            </li>

            <li className="card-item">
              <a href="#" className="card-link">
                <img src="/Images/P2.png" alt="card-image" className="card-image"/>
                <p className="badge">MERN Stack</p>
                <h2 className="card-title"> Techfest'24 SLIET Website </h2>
                <button className="card-button">Arrow_Forward</button>
              </a>
            </li>

            

            
           
          </ul>
        </div>
      </div>
   
  );
};

export default Work;
