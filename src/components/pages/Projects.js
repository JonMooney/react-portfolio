import React, {useEffect} from 'react';
import Project from '../Project'

export default function Projects() {
  const projects = [
    {
      title: 'Cmnt. A full-stack social application',
      image: './images/cmnt.png',
      alt: 'View of Cmnt application',
      description: 'Cmnt is a Node.js application that greets the user with a random topic that they can comment on. The app relies on randomness to get you out of your comfort zone to comment on things you might not comment on usually. You can click forward and back to get additional random topics. You can also post a topic from your dashboard, and with no emails required, you can remain 100% anonymous!',
      bullets: [
        'Full-Stack Node.js Application',
        'Deployed on Heroku', 
        'RESTful API with Express.js', 
        'Handlebars.js template engine', 
        'MySQL and Sequelize ORM', 
        'MVC Architechture',
        'Git/GitHub/Command Line'
      ],
      githubLink: 'https://github.com/JonMooney/cmnt.',
      deployedLink: 'https://node-cmnt.herokuapp.com/'
    },
    {
      title: 'Node.js Team Profile Generator',
      image: './images/tpg.png',
      alt: 'View of Team Profile Generator',
      description: 'The team profile generator is a CLI tool that goes through a series of questions to build a team profile page. It asks for manager info, and then prompts for intern or engineer team members. It then ouputs the results into a styled HTML page.',
      bullets: [
        'Node.js Application',
        'Inquirer module', 
        'Jest module for TDD', 
        'HTML/CSS/CSS Framework', 
        'JavaScript (Arrow Functions, Async/Await, Destructuring, Template Strings, OOP, Etc)', 
        'Git/GitHub/Command Line'
      ],
      githubLink: 'https://github.com/JonMooney/team-profile-generator/',
    },
    {
      title: 'Node.js Readme Generator',
      image: './images/readme.jpg',
      alt: 'View of Readme Generator',
      description: 'This is a Node.js application that uses command line input to help build a pre-formatted and professional looking README.md file for your particular project.',
      bullets: [
        'Node.js Application',
        'Inquirer module', 
        'JavaScript', 
        'Git/GitHub/Command Line', 
      ],
      githubLink: 'https://github.com/JonMooney/node-readme-generator',
    },
    {
      title: 'Weather Dashboard',
      image: './images/weather-dashboard.png',
      alt: 'View of Weather Dashboard',
      description: 'This weather dashboard allows a user to view the weather for a given city by entering a city name in the search area. It pulls up weather data for the current day, as well as a 5 day forecast. It stores your search history so you can easily find weather data for your favorite cities. You can also delete the cities you no longer need weather data for.',
      bullets: [
        'HTML/CSS/CSS Framework',
        'JavaScript (functions, events, Web APIs)', 
        'Server-side APIs', 
        'Git/GitHub/Command Line', 
      ],
      githubLink: 'https://jonmooney.github.io/weather-dashboard',
    },
    {
      title: 'Horiseon Social Solution Services, Inc.',
      image: './images/horiseon.png',
      alt: 'View of Horiseon Social Solution Site',
      description: 'Horiseon Social Solution Services, Inc, a ficticious company, was in need of a developer to update their site to the latest HTML5 standards and to address accessibility concerns.',
      bullets: [
        'Semantic HTML and logical element structuring',
        'Consolidation and clean up of CSS',
        'Addition of quality commenting for readability',
        'Use of alt attributes for images',
        'Other cleanup activities'
      ],
      githubLink: 'https://jonmooney.github.io/horiseon-accessibility/',
    },
    {
      title: 'Run Buddy',
      image: './images/run-buddy.png',
      alt: 'View of Run Buddy Site',
      description: 'A fully responsive web site that allows users to connect with a personal trainer. Includes various sections with company information, details on each trainers qualifications and style, and the specific steps to get into contact with them with an accompanying form.',
      bullets: [
        'HTML',
        'CSS'
      ],
      githubLink: 'https://jonmooney.github.io/run-buddy/',
    }
  ]

  // Scroll to top fix when changing components
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  return (
    <div className="row" >
      <section className="content">
        <div className="heading">PROJECTS</div>

        <div className="flex-box">

          {projects.map((project, key) => {
            return <div className="flex-container" key={key}><Project data={project} /></div>
          })}
          

        </div>
      </section>
    </div>
  );
}