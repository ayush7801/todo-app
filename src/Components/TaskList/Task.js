import { useState } from 'react';
import Deadline from './Deadline';
import './Task.css';

function Task(props){
    const tagstatus = document.getElementById('taskstatus');
    const check = document.getElementById('checkbox');
    let today = new Date();
    let militoday = Date.parse(today);

    let target = new Date(`${props.task.date.getFullYear()}/${props.task.date.getMonth()+1}/${props.task.date.getDate()} ${props.task.time}:00`);
    let militarget = target.getTime();

    const [status,setStatus] = useState(props.task.taskStatus);
    
    let diff = militarget - militoday;
    setTimeout(()=>{
        tagstatus.classList.remove('taskPlanned');
        if(check.checked){
            setStatus('Completed');
            if(tagstatus.classList.value.includes("taskPending"));
                tagstatus.classList.remove('taskPending');

            tagstatus.classList.add('taskComplete');
        }else{
            setStatus('Pending');
            tagstatus.classList.add('taskPending');
        }
    },diff);   

    function HandleCheck(e){
        if(e.target.checked){
            setStatus('Completed');
            if(tagstatus.classList.value.includes("taskPlanned"));
                tagstatus.classList.remove('taskPlanned');
            if(tagstatus.classList.value.includes("taskPending"));
                tagstatus.classList.remove('taskPending');
            tagstatus.classList.add('taskComplete');
        }else{
            if(diff<=0){
                setStatus('Pending');
                tagstatus.classList.remove('taskCompleted');
                tagstatus.classList.add('taskPending');
            }
            else{
                setStatus('Planned');
                tagstatus.classList.remove('taskCompleted');
                tagstatus.classList.add('taskPlanned');
            }
        }
    }
    //check.addEventListener('change',HandleCheck);
    return (
        <div className='task'>
            <input type='checkbox' className='checkbox' id='checkbox' onChange={HandleCheck}></input>
            <div className='title-container'>
                <Deadline deadline={props.task.date}/>
                <div className='title'>{props.task.title}</div>
            </div>
            <div className='tags'>
                <div className='buttons'>
                    {/* <img className='edit'>f044</img> */}
                    {/* <img className='delete'>f2ed</img> */}
                </div>
                <div className='tag taskPlanned' id='taskstatus'>{status}</div>
            </div>
        </div>
    );
}

export default Task;