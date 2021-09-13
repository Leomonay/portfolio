import teseract from '../../assets/icons/Tesseract2.gif'
import myself from '../../assets/images/myself.png'


import './index.css'

export default function About() {
  return (
    <div className='contentContainer'>
      <div className='contentTitle'>
        <h1>ABOUT ME</h1>
      </div>
      <div className='contentDescription'>
        <div className='descriptionItem'>
          <img className='profilePhoto' src={myself} alt=''/>
          <div>
            <p>I am a mobile & web full stack developer located in Argentina.</p>
            <div className='descriptionItem'>
              <p>Maths and physics lover, analytical and logical thinker. Very practical problem solver, independent with high attention to detail.</p>
              <img className='descriptionPhoto' src={teseract} alt=''/>
            </div>
          </div>
        </div>
        <div className='descriptionRow'>
            <p>I like travelling, knowing new places, playing table top, cards and roleplaying games,  cooking and dancing</p>
        </div>

          
          
        <div className='contentTitle'>
          <h3>Not just a Programmer...</h3>
        </div>
        <div className='descriptionRow'>
          <div className='descriptionItem factory'>
            <p><b>Industrial Engineer:</b> I have worked more than ten years in the industry managing information and databases, which has given me experience as an application user.</p>
          </div>
          <div className='descriptionItem school'>
            <p><b>Highschool Teacher:</b>I have taken a stretch of pedagogical training and have beeng teaching in many courses for a year before the pandemic.</p>
          </div>
        </div>
      </div>
   </div>
  );
}