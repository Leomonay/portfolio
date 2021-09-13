import paintApp from '../../assets/images/paintAPP.png'
import todoApp from '../../assets/images/todoApp.png'
import weatherApp from '../../assets/images/weatherApp.png'

import './index.css'

export default function Projects() {
    const projects=[
        {
            id:'toDoList',
            name: 'To do List',
            description: 'An academy project about DOM refreshing. I some features to make it a little more useful',
            image: todoApp,
            link: "https://todolist-beige.vercel.app/"
        },
        {
            id:'paintApp',
            name: 'PaintApp',
            description: 'An academy project about bundlers. Three scripts manage whiteboard and markers. The objective is to use webpack to compile project',
            image: paintApp,
            link: 'https://leomonay-paintapp.herokuapp.com/'
        },
        {
          id: 'weatherApp',
          name: 'WeatherApp',
          description: 'App that allows to know the weather in a specific city',
          image: weatherApp,
          link: 'https://weather-leomonay.vercel.app/'
        }
    ]
    function createProject(project){
        const buttonBackground = project.image?{'background-image':`url(${project.image})`}:{'background':`lightgrey`}
        const link = project.link?
            {href:project.link,target:"_blank"}
            :{href:"",target:''}
        return(
            <div className='projectContainer'>
                <h4>{project.name}</h4>
                <a href={link.href} target={link.target} rel="noreferrer">
                    <button className='projectButton' id={project.id} style={buttonBackground}>
                    </button>
                </a>
                <span className='projectDescription'>{project.description}</span>
            </div>
        )
    }   

  return (
    <div className='contentContainer'>
      <div className='contentTitle'>
        <h1>PROJECTS</h1>
      </div>
      <div className='contentDescription'>
        <p>Here is a gallery of my projects:</p>
      </div>
      <div className='projectGallery'>
        {projects.map(createProject)}
      </div>
   </div>
  );
}