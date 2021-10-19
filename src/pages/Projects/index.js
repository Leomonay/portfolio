import paintApp from '../../assets/images/paintAPP.png'
import todoApp from '../../assets/images/todoApp.png'
import weatherApp from '../../assets/images/weatherApp.png'
import movieSearch from '../../assets/images/movieSearch.png'
import git from '../../assets/icons/GitHub.png'
import {stack} from '../Skills/index'

import './index.css'

export default function Projects() {
    const {js, html, css, express, ReactJS, Redux, sequelize, postgre}=stack

    const projects=[
        {
            id:'toDoList',
            name: 'To do List',
            description: 'An academy project about DOM refreshing. I some features to make it a little more useful',
            image: todoApp,
            link: "https://todolist-beige.vercel.app/",
            git: {web: 'https://github.com/Leomonay/todolist'},
            stack: [js, html, css]
        },
        {
            id:'paintApp',
            name: 'PaintApp',
            description: 'An academy project about bundlers. Three scripts manage whiteboard and markers. Webpack is used to compile.',
            image: paintApp,
            link: 'https://leomonay-paintapp.herokuapp.com/',
            git: {app: 'https://github.com/Leomonay/paintApp'},
            stack: [js, html, css, express]
        },
        {
          id: 'weatherApp',
          name: 'WeatherApp',
          description: 'App that allows to know the weather in a specific city',
          image: weatherApp,
          link: 'https://weather-leomonay.vercel.app/',
          git: {ReactApp: 'https://github.com/Leomonay/weatherApp'},
          stack: [js, html, css, ReactJS]
        },
        {
          id: 'movieSearcher',
          name: 'Movie Searcher',
          description: 'App that allows to search films in Internet Movie Data Base (IMDB), and select favorites.',
          image: movieSearch,
          link: 'https://leomonay-movie-searcher.vercel.app/',
          git: {ReactApp: 'https://github.com/Leomonay/movieSearcher'},
          stack: [js, html, css, ReactJS, Redux]
        },
        {
          id: 'pokedex',
          name: 'Pokedex',
          description: 'REST Api that shows pokemon from pokeapi and allows to create new pokemon',
          image: 'https://raw.githubusercontent.com/Leomonay/pokeClient/main/Thumbnail.png',
          link: 'https://leomonay-pokedex.vercel.app/',
          git: {
            app: 'https://github.com/Leomonay/pokeClient',
            server: 'https://github.com/Leomonay/pokeServer',
          },
          stack: [js, html, css, ReactJS, Redux, express, sequelize, postgre]
        },
        {
          id: 'tequiero',
          name: 'Té Quiero',
          description: 'REST Api made in a 10 people teamwork using Trello, Git and SCRUM metodology',
          image: 'https://github.com/Leomonay/ecommerce_app/blob/main/thumbnail.png?raw=true',
          link: 'https://tequiero.vercel.app/',
          git: {
            app: 'https://github.com/Leomonay/ecommerce_app',
            server: 'https://github.com/Leomonay/ecommerce_server',
            teamwork: 'https://github.com/henry-labs/ecommerce-ft09-g03'
          },
          stack: [js, html, css, ReactJS, Redux, express, sequelize, postgre]
        }
    ]

    function github(projectGit){
      let repos = Object.keys(projectGit)
      return repos.map((repo, index)=>
        <a className='linkToRepo' href={projectGit[repo]} key={index} target='_blank' rel='noreferrer'>
          <img className='projectGit' src={git} alt='GitHub'/>
          <div className='repoTheme'>{repo}</div>
        </a>)
      }


    function ProjectInfo(props){
        const {project} = props
        const link = project.link?
            {href:project.link,target:"_blank"}
            :{href:"",target:''}
        return(
            <div className='projectContainer' >
              <a className='linkToDeploy' href={link.href} target={link.target} rel="noreferrer">
                <img className='projectThumbnail' id={project.id} src={project.image} alt=''/>
              </a>
              <div className='projectInfo'>
                <div className='projectResume'>
                  <div><b>{project.name}</b></div>
                  <div className='projectDescription'>{project.description}</div>
                </div>
                <div className='projectStackSection'>
                  <b>Stack:</b>
                  {project.stack.map((e,index)=><img className='stackImg' src={e} key={index} alt={index}/>)}
                </div>
                <div className='projectGitHubSection'>
                  {github(project.git)}
                </div>
              </div>
            </div>
        )
    }   

  return (
    <div className='contentContainer'>
      <div className='contentTitle'>
        <div className='pageTitle'>PROJECTS</div>
      </div>
      <div className='contentDescription'>
        <div className='pageSubtitle'>Here is a gallery of my projects:</div>
        <div className='paragraph'>(click on Thumbnail to see the deploy)</div>
      <div className='projectGallery'>
        {projects.reverse().map(project=><ProjectInfo project={project} key={project.id}/>)}
      </div>
      </div>

   </div>
  );
}