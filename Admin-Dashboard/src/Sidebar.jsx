import './App.css'
import microsoft from './assets/Icons/microsoft.svg'
import gear from './assets/Icons/gear-fill.svg'
import home from './assets/Icons/house.svg'
import profile from './assets/Icons/person-circle.svg'
import messages from './assets/Icons/chat-left-text-fill.svg'
import history from './assets/Icons/clock-history.svg'
import task from './assets/Icons/list-task.svg'
import privacy from './assets/Icons/shield-shaded.svg'
import support from './assets/Icons/person-raised-hand.svg'

function Sidebar(props){
    return(

        <div className="sidebar">
            <div className='title'>
                <img src={microsoft} />
                Dashboard
            </div>
            <div className="card">
                <img src={home} />
                Home
            </div>
            <div className="card">
                <img src={profile} />
                Profile
            </div>
            <div className="card">
                 <img src={messages} />
                 Messages
            </div>
            <div className="card">
                <img src={history} />
                 History
            </div>
            <div className="card">
                <img src={task} />
                Tasks
            </div>
            <div className="card">
                <img src={gear} />
                Setting
            </div>
            <div className="card">
                <img src={support} />
                Support
            </div>
            <div className="card">
                <img src={privacy} />
                Privacy
            </div>
            
        </div>
        
    )
}
export default Sidebar