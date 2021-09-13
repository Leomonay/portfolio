import {Link} from 'react-router-dom'
import './index.css'
export default function Landing() {
  return (
    <div className='landingContainer'>
            <div className='welcomeMessage'>HI! Welcome to my portfolio</div>
            
            <div className='landingTitle transp'>
              <h1>Leonardo Monay</h1>
            </div>

            <Link to='/about'><button className='enterButton'>Enter Here!</button></Link>

            <div className='welcomeCode'>         
            <label>Full Stack Web Developer= <label className="codeBracket">{'{'}</label></label>
            <label className="codeKey">Databases<label className='codeSigns'>: </label><label className="codeValue">true</label><label className='codeSigns'>, </label></label>
            <label className="codeKey">Back-End<label className='codeSigns'>: </label><label className="codeValue">true</label><label className='codeSigns'>, </label></label>
            <label className="codeKey">Front-End<label className='codeSigns'>: </label><label className="codeValue">true</label><label className='codeSigns'>, </label></label>
            <label className="codeKey">Mobile<label className='codeSigns'>: </label><label className="codeValue">true</label><label className='codeSigns'>, </label></label>
            <label className="codeKey">Web<label className='codeSigns'>: </label><label className="codeValue">true</label><label className='codeSigns'>, </label></label>
            <label className="codeKey">Test Automation<label className='codeSigns'>: </label><label className="codeValue">true</label><label className='codeSigns'>, </label></label>
            <label className="codeBracket">{'}'}</label>
            </div>


    </div>
  );
}