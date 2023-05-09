import React from 'react';
import '../assets/css/style.css';
import howard from '../assets/images/Howard1.jpg'
import laptop from '../assets/images/pexels-danny-meneses-943096.jpg'

function AboutMe() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 150px)',
    width: '100%',
    backgroundImage: `url(${laptop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'whitesmoke',
    top: '75px',
    position: 'fixed',
    left : '0px',
  };

  return (
    <section style={styles}>
      <div id='aboutme'>
        <h2>About Me</h2>
        <a href='https://github.com/hvansalisbury' target='_blank' rel="noopener noreferrer">
          <img src={howard} alt="Howard Van Salisbury" height="250" width="250" id="profile-picture"></img>
        </a>
        <p id='aboutme-text'>
          Hello World! I'm Howard Van Salisbury. I am a developer who learned from the Rutgers Full-Stack
          Coding Bootcamp. I have worked with HTML, CSS, JavaScript, Node, SQL, NoSQL, React, Express, MVC, etc. I have a BA in Mathematics and I'm a certified
          math teacher too. I live in Hazlet, NJ where you can find me being dad to two amazing kids and
          husband to my beautiful wife. When I'm not coding, I like to play disc golf, play guitar, and bake.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
