import './Tasklist.css';
import Task from './Task';
import { createRef, useEffect, useState } from 'react';
function Tasklist(props){
  const [elrefs,setRefs] = useState([]);
//   const [indexDel,setDeleteIndex] = useState();
  
  useEffect(()=>{
        setRefs( (refs) => Array(props.tasks?.length).fill()?.map((_,i) => refs[i] || createRef()) );
    }, [props.tasks]);
    // useEffect(()=>{
    //     const temp = props.tasks;
    //     temp.slice(indexDel,1);
    //     props.setTasklist(temp);
    // }, [indexDel]);
    return (
        <div className='tasklist'>
            {props?.tasks?.map((t,index) => (<div ref={elrefs[index]} className='taskdiv'>
                <Task task={t} key={index} elref={elrefs[index]} index={index}/>
                </div>
            ))}
        </div>
    );
}

export default Tasklist;