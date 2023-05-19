import React from 'react';
import resume from '../assets/images/Resume.pdf';
import mic from '../assets/images/pexels-erkan-utu-302655.jpg';
import file from '../assets/images/208-2088186_png-file-report-icon-vector-png.png';
import mvc from '../assets/images/MVC.png';
import oop from '../assets/images/OOP.png';
const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 150px)',
    width: '100%',
    backgroundImage: `url(${mic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'whitesmoke',
    top: '75px',
    position: 'fixed',
    left: '0px',
  },
};
function Resume() {
  return (
    <section className='resume-section' style={styles.section}>
      <div className='resume-container'>
        <h3>Résumé</h3>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <img src={file} alt='file' className='file-img' />
        </a>
      </div>
      <div className='skills-container'>
        <h3>Skills</h3>
        <div className='skills-list'>
          <img height="50" width="50" src={mvc} alt="MVC" title="MVC" />
          <img height="50" width="50" src={oop} alt="OOP" title="OOP" />
          <img height="50" width="50" src="https://ico.now.sh/css3/eee" alt="css3" title="css" />
          <img height="50" width="50" src="https://ico.now.sh/javascript/eee" alt="javascript" title="javascript" />
          <img height="50" width="50" src="https://ico.now.sh/react/eee" alt="react" title="react" />
          <img height="50" width="50" src="https://ico.now.sh/graphql/eee" alt="graphql" title="graphql" />
          <img height="50" width="50" src="https://ico.vercel.app/mongodb/eee" alt="mongodb" title="mongodb" />
          <img height="50" width="50" src="https://ico.vercel.app/dotenv/eee" alt="dotenv" title="dotenv" />
          <img height="50" width="50" src="https://ico.vercel.app/bootstrap/eee" alt="bootstrap" title="bootstrap" />
          <img height="50" width="50" src="https://ico.vercel.app/bulma/eee" alt="bulma" title="bulma" />
          <img height="50" width="50" src="https://ico.vercel.app/express/eee" alt="express.js" title="express.js" />
          <img height="50" width="50" src="https://ico.vercel.app/git/eee" alt="git" title="git" />
          <img height="50" width="50" src="https://ico.vercel.app/github/eee" alt="github" title="github" />
          <img height="50" width="50" src="https://ico.vercel.app/handlebarsdotjs/eee" alt="handlebars.js" title="handlebars.js" />
          <img height="50" width="50" src="https://ico.vercel.app/heroku/eee" alt="heroku" title="heroku" />
          <img height="50" width="50" src="https://ico.vercel.app/insomnia/eee" alt="insomnia" title="insomnia" />
          <img height="50" width="50" src="https://ico.vercel.app/jest/eee" alt="jest" title="jest" />
          <img height="50" width="50" src="https://ico.vercel.app/axios/eee" alt="axios" title="axios" />
          <img height="50" width="50" src="https://ico.vercel.app/jquery/eee" alt="jquery" title="jquery" />
          <img height="50" width="50" src="https://ico.vercel.app/json/eee" alt="JSON" title="JSON" />
          <img height="50" width="50" src="https://ico.vercel.app/jsonwebtokens/eee" alt="JWT" title="JWT" />
          <img height="50" width="50" src="https://ico.vercel.app/markdown/eee" alt="markdown" title="markdown" />
          <img height="50" width="50" src="https://ico.vercel.app/mysql/eee" alt="MySQL" title="MySQL" />
          <img height="50" width="50" src="https://ico.vercel.app/nodedotjs/eee" alt="node.js" title="node.js" />
          <img height="50" width="50" src="https://ico.vercel.app/nodemon/eee" alt="nodemon" title="nodemon" />
          <img height="50" width="50" src="https://ico.vercel.app/npm/eee" alt="NPM" title="NPM" />
          <img height="50" width="50" src="https://ico.vercel.app/pwa/eee" alt="progressive-web-app" title="progressive-web-app" />
          <img height="50" width="50" src="https://ico.vercel.app/redux/eee" alt="redux" title="redux" />
          <img height="50" width="50" src="https://ico.vercel.app/sequelize/eee" alt="sequelize" title="sequelize" />
          <img height="50" width="50" src="https://ico.vercel.app/visualstudiocode/eee" alt="VS-Code" title="VS-Code" />
        </div>
      </div>
    </section>
  );
};
export default Resume;