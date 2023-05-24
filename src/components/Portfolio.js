import React from 'react';
import Project from './Project';
import FeatureProject from './FeatureProject';
import blog from '../assets/images/Blog.png';
import weatherforecast from '../assets/images/WeatherForecast.png';
import wordsearch from '../assets/images/WordSearch.png';
import keyboard from '../assets/images/pexels-karol-d-841228.jpg';

const featureProjects = [
  {
    id: '0',
    name: 'Family Recipe Box',
    info: 'This a database to store all of your family recipes. You can view, add, edit, and delete recipes',
    video: 'https://drive.google.com/file/d/1x_Um5kY1181Q1rYucAm90qBgKHvwLbXS/preview',
    languages: 'MERN, React,MongoDB, mongoose, express, dotenv, JWT, bcrypt, Apollo Server, CSS',
    repo: 'https://github.com/hvansalisbury/Family-Recipe-Box',
    link: 'https://family-recipe-box-8675309.herokuapp.com/',
  },
  {
    id: '1',
    name: 'Quiz Cr8r',
    info: 'Quiz creating app that allows user to create and take quizzes.',
    video: 'https://drive.google.com/file/d/1uIpntrwSyQzHf1la8Nt5lu9OnixG0SnF/preview',
    languages: 'HTML, CSS, JavaScript, AOS, Bcrypt, Sequelize, Dotenv, Express, MySQL, Nodemon, Handlebars',
    repo: 'https://github.com/HumzaShaukat/QuizCR8R',
    link: 'https://intense-forest-76320.herokuapp.com/',
  },
];

const projects = [
  {
    id: '0',
    name: 'Word Search Tool',
    info: 'A tool to help you find words. This will return synonyms, rhymes, and antonyms as well as pronunciations and definitions.',
    picture: wordsearch,
    languages: 'HTML, CSS, JavaScript, JQuery, Bulma, 3rd party APIs',
    repo: 'https://github.com/cmcclay77/super-team-project',
    link: 'https://cmcclay77.github.io/super-team-project/',
  },
  {
    id: '1',
    name: '5-day Weather Forecast',
    info: 'A weather forecast app that allows you to search for a city and returns the forecast.',
    picture: weatherforecast,
    languages: 'HTML, CSS, Javascript, 3rd party APIs',
    repo: 'https://github.com/hvansalisbury/5-day-weather-forecast',
    link: 'https://hvansalisbury.github.io/5-day-weather-forecast/',
  },
  {
    id: '2',
    name: 'Blog',
    info: 'This is a basic blog site where users can log in, write posts, and comment on other posts.',
    picture: blog,
    languages: 'MVC, Handlebars, MySQL, bcrypt, express, dotenv, sequelize, nodemon, JavaScript, CSS, REST APIs',
    repo: 'https://github.com/hvansalisbury/Howards-Blog',
    link: 'https://howards-blog.herokuapp.com/',
  },
];

function Portfolio() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundImage: `url(${keyboard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'whitesmoke',
    top: '75px',
    left: '0px',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <section style={styles} className='portfolio-section'>
      <FeatureProject featureProjects={featureProjects} />
      <Project projects={projects} />
    </section>
  );
};
export default Portfolio;