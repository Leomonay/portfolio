import js from '../../assets/icons/JS.png'
import html from '../../assets/icons/HTML.png'
import css from '../../assets/icons/CSS.png'
import ReactJS from '../../assets/icons/React.png'
import Redux from '../../assets/icons/Redux.png'

import java from '../../assets/icons/Java.png'
import node from '../../assets/icons/NodeJS.png'
import express from '../../assets/icons/ExpressJS.png'
import sequelize from '../../assets/icons/Sequelize.png'
import postgre from '../../assets/icons/PostgreSQL.png'
import postman from '../../assets/icons/Postman.png'
import mongo from '../../assets/icons/MongoDB.png'

import mocha from '../../assets/icons/mocha.png'
import chai from '../../assets/icons/Chai.png'
import testNG from '../../assets/icons/TestNG.png'
import selenium from '../../assets/icons/selenium-logo.png'
import appium from '../../assets/icons/Appium.png'



import './index.css'

export default function About() {
  const Skills={
    'Front End':[
      {skill: 'JavaScript', img:js},
      {skill: 'HTML 5', img:html},
      {skill: 'CSS 3', img:css},
      {skill: 'React', img:ReactJS},
      {skill: 'Redux', img:Redux},
    ],
    'Back End':[
      {skill: 'Java', img:java},
      {skill: 'Node', img:node},
      {skill: 'Express', img:express},
      {skill: 'Postman', img:postman},
      {skill: 'Sequelize', img:sequelize},
      {skill: 'PostgreSQL', img:postgre},
      {skill: 'Mongo', img:mongo},    
    ],
    Testing:[
      {skill: 'Mocha', img:mocha},
      {skill: 'Chai', img:chai},
      {skill: 'TestNg', img:testNG},
      {skill: 'Selenium', img:selenium},
      {skill: 'Appium', img:appium},
    ]
  }
  function skillSections(skillObj){
    const skillsArray = Object.keys(skillObj)
    return(skillsArray.map(e=>skillSection(skillObj,e)))
  }
  function skillSection(object,prop){
    return(
      <div className='aboutSkills' key={prop}>
        <div className='skillsTitle contentTitle'>{prop}</div>
        <div className='skillIcons'>
        {object[prop].map(skillDiv)}
        </div>
      </div>
    )
  }

  function skillDiv(skill){
    return(
      <div className='skillDiv' id={skill.skill} key={skill.skill}>
          <img className='skillImage' src={skill.img} alt=''/>
          <div className='skillName' style={{color: 'black','font-weight': 'bold'}}>{skill.skill}</div>
      </div>
    )
  }

  return (
    <div className='contentContainer'>
      <div className='contentTitle'>
        <h1>MY SKILLS</h1>
      </div>
      <div className='contentDescription'>
        <p>I attended the <a href='https://www.soyhenry.com/' target='_blank' rel="noreferrer"><b>soyhenry.com</b></a> bootcamp, which consists of more than 700 hours of study and practical projects, both individual and group.</p>
        <p>Since then, I have worked as Testing Engineer for Globant, as Evaluation tutor on Tecla Coding Academy and on some freelance projects</p>
        <div className='skillsContent'>
          {skillSections(Skills)}
        </div>
      </div>
   </div>
  );
}