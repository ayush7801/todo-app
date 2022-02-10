import './Tasklist.css';
import Task from './Task';
function Tasklist(props){
    console.log(props.tasks);
    return (
        <div className='tasklist'>
            {props.tasks.map((t,index) => (
                 <Task task={t} key={index}/>
            ))}
        </div>
    );
}

export default Tasklist;