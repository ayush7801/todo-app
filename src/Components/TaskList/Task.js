import Deadline from './Deadline';
import './Task.css';

function Task(props){
    return (
        <div className='task'>
            <input type='checkbox' className='checkbox'></input>
            <div className='title-container'>
                <Deadline deadline={props.task.date}/>
                <div className='title'>{props.task.title}</div>
            </div>
            <div className='tags'>
                <div className='buttons'>
                    {/* <img className='edit'>f044</img> */}
                    {/* <img className='delete'>f2ed</img> */}
                </div>
                <div className='tag'>Completed</div>
            </div>
        </div>
    );
}

export default Task;