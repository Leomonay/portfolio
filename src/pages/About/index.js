import myself from '../../assets/images/myself.png'


import './index.css'

export default function About() {
  return (
    <div className='contentContainer'>
      <div className='pageTitle'>ABOUT ME</div>
      <div className='contentDescription'>

        <div className='descriptionItem'>
          <img className='profilePhoto' src={myself} alt=''/>
          <b>I am a mobile & web full stack developer located in Argentina.</b>
          <img className='descriptionImg' src={'https://i.gifer.com/origin/c1/c1e1cde1ab0b1cbb9f9cf6a4c13f977c.gif'} alt=''/>
          <p>Maths and physics lover, analytical and logical thinker. Very practical problem solver, independent with high attention to detail.</p>
          <p>I like travelling, knowing new places, playing table top, cards and roleplaying games,  cooking and dancing</p>
        </div>

        <div className='pageSubtitle'>Not only Programming...</div>
        <div className='descriptionRow'>
          <div className='descriptionItem'>
            <div className='factory'>
              <div className='descriptionItemText'>
              <div className='itemSubtitle'>Industrial Engineer</div>
                I have worked more than ten years in the industry managing information and databases, which has given me experience as an application user.
              </div>
            </div>
          </div>

          <div className='descriptionItem'>
            <div className='school'>
              <div className='descriptionItemText'>
              <div className='itemSubtitle'>Highschool Teacher</div>
                I have taken a stretch of pedagogical training and have been teaching in many courses for a year before the pandemic.
              </div>
            </div>
          </div>

        </div>
      </div>
   </div>
  );
}