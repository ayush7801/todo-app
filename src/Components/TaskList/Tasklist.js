import './Tasklist.css';
import Task from './Task';
import { createRef, useEffect, useState } from 'react';
function Tasklist(props){
    const [elrefs,setRefs] = useState([]);
    useEffect(()=>{
        setRefs( (refs) => Array(props.tasks?.length).fill()?.map((_,i) => refs[i] || createRef()) );
    }, [props.tasks]);
    return (
        <div className='tasklist'>
            {props?.tasks?.map((t,index) => (
                <Task task={t} key={index} ref={elrefs[index]} />
            ))}
        </div>
    );
}

export default Tasklist;