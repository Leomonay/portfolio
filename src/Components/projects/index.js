import './index.css';
import todo from '../../Todo.png'

export default function index(){
    return(
        <div className="bodyProjects">
            <h1>Projects</h1>
            (in progress)
            <div className="content">
            <div className="eachProject">
                <div>
                    <a href="https://todolist-beige.vercel.app/" target="_blank" rel="noreferrer">
                    <button className="projectButton todo">
                    </button>
                    </a>
                    <p>To do List</p>
                </div>
            </div>            <div className="eachProject">
                <div><button className="projectButton">Paint</button></div>
                <div>05-Bundlers</div>
            </div>
            <div className="eachProject">
                <div><button className="projectButton">Clima</button></div>
                <div>Pokedex</div>
            </div>
            <div className="eachProject">
                <div><button className="projectButton">Movies</button></div>
                <div>Pokedex</div>
            </div>
            <div className="eachProject">
                <div><button className="projectButton">HenryDex</button></div>
                <div>
                    <a href='https://henrydex-leomonay.vercel.app/'>HenryDex</a>
            </div>
            </div>
            <div className="eachProject">
                <div><button className="projectButton">Té Quiero</button></div>
                <div>Pokedex</div>
            </div>

            </div>
            <br/>
        </div>
    )
}