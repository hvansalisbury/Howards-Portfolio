// imports react
import React from 'react';
// imports profile picture
import howard from '../assets/images/Howard1.jpg'
// aboutme function
function AboutMe() {
  const styles = {
    
  };
  // returns html for aboutme state
  return (
    <div className='d-flex flex-column align-items-center pb-5'>
      <h2>About Me</h2>
      <a href='https://github.com/hvansalisbury'>
        <img src={howard} alt="Howard Van Salisbury" height="200" width="200" className="rounded-circle border border-5 border-secondary image-link"></img>
      </a>
      <p className='w-50 m-2'>
        Hello World! I'm Howard Van Salisbury. I am a developer who learned from the Rutgers Full-Stack
        Coding Bootcamp. I have worked with HTML, CSS, and JavaScript. I have a BA in Mathematics and I'm a certified
        math teacher too. I live in Hazlet, NJ where you can find me being dad to two amazing kids and
        husband to my beautiful wife. When I'm not coding, I like to play disc golf, play guitar, and bake.
      </p>
    </div>
  );
};
// exports aboutme function
export default AboutMe;
