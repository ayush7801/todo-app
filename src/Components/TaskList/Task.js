import { useState, createRef, useEffect, useContext } from 'react';
import Deadline from './Deadline';
import './Task.css';
import { deleteContext } from '../../App';

function Task(props) {
    const tagref = createRef();
    const checkref = createRef();
    const [status, setStatus] = useState(props.task.taskStatus);

    let today = new Date();
    let militoday = Date.parse(today);
    let target = new Date(`${props.task.date.getFullYear()}/${props.task.date.getMonth() + 1}/${props.task.date.getDate()} ${props.task.time}:00`);
    let militarget = target.getTime();


    let diff = militarget - militoday;

    useEffect(
        () => {
            setTimeout(() => {
                if (tagref?.current?.classList?.value?.includes("taskPlanned"))
                    tagref?.current?.classList?.remove('taskPlanned');
                if (checkref?.current?.checked) {
                    if (tagref?.current?.classList?.value?.includes("taskPending"))
                        tagref?.current?.classList?.remove('taskPending');

                    tagref?.current?.classList.add('taskComplete');
                    setStatus('Completed');
                } else {
                    tagref?.current?.classList.add('taskPending');
                    setStatus('Pending');
                }
            }, diff);
        });

    function HandleCheck(e) {
        if (checkref.current.checked) {
            setStatus('Completed');
            if (tagref?.current.classList.value.includes("taskPlanned"));
            tagref?.current.classList.remove('taskPlanned');
            if (tagref?.current.classList.value.includes("taskPending"));
            tagref?.current.classList.remove('taskPending');
            tagref?.current.classList.add('taskComplete');
        } else {
            if (diff <= 0) {
                setStatus('Pending');
                tagref?.current.classList.remove('taskCompleted');
                tagref?.current.classList.add('taskPending');
            }
            else {
                setStatus('Planned');
                tagref?.current.classList.remove('taskCompleted');
                tagref?.current.classList.add('taskPlanned');
            }
        }
    }

    function handleDelete() {
        props.elref?.current?.remove();
        // const flag = window.confirm("Do you want to permanently delete this task");  
        // if(flag){
        //     props.setDeleteIndex(props.index);
        // }
    }
    return (
        <div className='task'>
            <div className='timeandops'>
                <Deadline deadline={props.task.date} />
                <div className='buttons'>
                    <img id="edit" src="https://img.icons8.com/ios-glyphs/30/000000/edit--v2.png" alt='Edit' />
                    <img id="delete" src="https://img.icons8.com/ios-glyphs/100/000000/filled-trash.png" alt='Delete' onClick={handleDelete} />
                </div>
            </div>
            <div className='midbox'>
                <input type='checkbox' className='checkbox' ref={checkref} onChange={HandleCheck}></input>
                <div className='titlebox'>
                    <div className='title'>{props.task.title}</div>
                </div>
            </div>


            <div className='tags'>
                <div className='tag taskPlanned' ref={tagref}>{status}</div>
            </div>
        </div>
    );
}

export default Task;