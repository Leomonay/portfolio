import photo from '../../Leo.jpg';
import self1 from '../../Looklike.png';
import {Link} from 'react-router-dom';
import './index.css';

export default function index(){
    return(
        <div className="homeBody">
        <div className="name">Leonardo Monay</div>
        <div className="job">Web & Mobile FullStack Developer</div>
            <div className="description">
                <div className="avatarDiv">
                    <img className="avatar" src={photo}/>
                {/* </div>
                <div className="selfDescription"> */}
                    <img src={self1} className='selfClip1'/>
                </div>
            </div>
            <div className="homeFooter">That´s all in this tab, go and see the
                <Link className="homeFooter" to="/about">next</Link>
            </div>
        </div>
    )
}