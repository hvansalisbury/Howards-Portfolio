import React from 'react';

function AboutMe() {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h2>About Me</h2>
      <a href='https://github.com/hvansalisbury'>
        <img src="howard1.jpg" alt="Howard Van Salisbury" height="200" width="200" className='rounded-circle border border-5 border-secondary'></img>
      </a>
      <p className='w-50 m-2'>
        Hello World! I'm Howard Van Salisbury. I am a developer who learned from the Rutgers Full-Stack
        Coding Bootcamp. I have worked with HTML, CSS, and JavaScript. I have a BA in Mathematics and I'm a certified
        math teacher too. I live in Hazlet, NJ where you can find me being dad to two amazing kids and
        husband to my beautiful wife. When I'm not coding, I like to play disc golf, play guitar, and bake.
      </p>
    </div>
  );
}

export default AboutMe;
