import { useState, createRef } from 'react';
import Deadline from './Deadline';
import './Task.css';

function Task(props){console.log(props.key);
    const tagref = createRef();
    const checkref = createRef();
    let today = new Date();
    let militoday = Date.parse(today);
    let target = new Date(`${props.task.date.getFullYear()}/${props.task.date.getMonth()+1}/${props.task.date.getDate()} ${props.task.time}:00`);
    let militarget = target.getTime();

    const [status,setStatus] = useState(props.task.taskStatus);
    
    let diff = militarget - militoday;
    setTimeout(()=>{
        tagref?.current.classList?.remove('taskPlanned');
        if(checkref?.current.checked){
            setStatus('Completed');
            if(tagref?.current.classList?.value?.includes("taskPending"));
                tagref?.current.classList?.remove('taskPending');

            tagref?.current.classList.add('taskComplete');
        }else{
            setStatus('Pending');
            tagref?.current.classList.add('taskPending');
        }
    },diff);   

    function HandleCheck(e){
        if(checkref.current.checked){
            setStatus('Completed');
            if(tagref?.current.classList.value.includes("taskPlanned"));
                tagref?.current.classList.remove('taskPlanned');
            if(tagref?.current.classList.value.includes("taskPending"));
                tagref?.current.classList.remove('taskPending');
            tagref?.current.classList.add('taskComplete');
        }else{
            if(diff<=0){
                setStatus('Pending');
                tagref?.current.classList.remove('taskCompleted');
                tagref?.current.classList.add('taskPending');
            }
            else{
                setStatus('Planned');
                tagref?.current.classList.remove('taskCompleted');
                tagref?.current.classList.add('taskPlanned');
            }
        }
    }
    return (
        <div className='task'>
            <input type='checkbox' className='checkbox' ref={checkref} onChange={HandleCheck}></input>
            <div className='title-container'>
                <Deadline deadline={props.task.date}/>
                <div className='title'>{props.task.title}</div>
            </div>
            <div className='tags'>
                <div className='buttons'>
                    {/* <img className='edit'>f044</img> */}
                    {/* <img className='delete'>f2ed</img> */}
                </div>
                <div className='tag taskPlanned' ref={tagref}>{status}</div>
            </div>
        </div>
    );
}

export default Task;