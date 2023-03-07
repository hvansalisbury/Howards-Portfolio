import React, { useState } from 'react';
import quizcr8r from '../assets/images/QuizCr8r.png';
import blog from '../assets/images/Blog.png';
import weatherforecast from '../assets/images/WeatherForecast.png';
import wordsearch from '../assets/images/WordSearch.png';


// const styles = {
//   img: {
//     height: '40%',
//     width: '100%',
//   },
//   card: {
//     height: '20vh',
//     width: '20vh',
//     border: 'white solid 1px',
//     margin: '1em'
//   },
// };


function ProjectList() {

  const projects = [
    {
      name: 'Blog',
      info: 'This is a basic blog site where users can log in, write posts, and comment on other posts.',
      picture: blog,
      languages: 'React, Bootstrap, CSS',
      repo: 'https://github.com/hvansalisbury/Howards-Portfolio',
      link: 'https://hvansalisbury.github.io/Howards-Portfolio/',
    },
    {
      name: 'Quiz Cr8r',
      info: 'Quiz creating app that allows user to create and take quizzes.',
      picture: quizcr8r,
      languages: 'React, Bootstrap, CSS',
      repo: 'https://github.com/HumzaShaukat/QuizCR8R',
      link: 'https://intense-forest-76320.herokuapp.com/',
    },
    {
      name: 'Word Search Tool',
      info: 'A tool to help you find words. This will return synonyms, rhymes, and antonyms as well as pronunciations and definitions.',
      picture: wordsearch,
      languages: 'React, Bootstrap, CSS',
      repo: 'https://github.com/cmcclay77/super-team-project',
      link: 'https://cmcclay77.github.io/super-team-project/',
    },
    {
      name: '5-day Weather Forecast',
      info: 'A weather forecast app that allows you to search for a city and returns the forecast.',
      picture: weatherforecast,
      languages: 'React, Bootstrap, CSS',
      repo: 'https://github.com/hvansalisbury/5-day-weather-forecast',
      link: 'https://hvansalisbury.github.io/5-day-weather-forecast/',
    },
  ];
}

export default ProjectList;