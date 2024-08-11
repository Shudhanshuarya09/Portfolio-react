import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
      <span className='hello'>Hello,</span>
      <br/>
      <span className='introtext'>I'm <span className='introName'>Shudhanshu Arya</span> <br/> Web Developer</span>
      <p className='intoPara'>I am a passionate web developer with full of skills and ambitions looking for the great oppurtinity</p>
      <Link><button className='btn'><img src='/assets/hireme.png' alt=''/> Hire Me </button></Link>
      

    </div>
    {/* <img src='/Images/my.jpg' alt=''/> */}

   </section>

  )
}

export default Intro;