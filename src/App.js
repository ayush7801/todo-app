import './App.css';
import { useState, createContext, useEffect } from 'react';
import Tasklist from './Components/TaskList/Tasklist';
import Opsarea from './Components/TaskOps/Opsarea';
const TaskContext = createContext();
// const deleteContext = createContext();
function App() {
  const [tasklist, setTasklist] = useState([]);
  // cnst [deleteKey, setDeleteKey] = useState();
  // console.log({tasklist});
  // useEffect(()=>{console.log({deleteKey});
  //   const newlist = tasklist;console.log({newlist});
  //   newlist.splice(deleteKey,1);console.log({newlist});
  //   setTasklist(newlist);
  // },[deleteKey])

  function HandleForm(formValue) {
    const newTasklist = [...tasklist, formValue];
    setTasklist(newTasklist);
  }
  return (
    <div className="App">
      <TaskContext.Provider value={HandleForm}>
        <Opsarea HandleForm={HandleForm} />
        <Tasklist tasks={tasklist} setTasklist={setTasklist}/>
      </TaskContext.Provider>
      {/* <deleteContext.Provider value={setDeleteKey}> */}
      {/* </deleteContext.Provider> */}
    </div>
  );
}

export default App;
export { TaskContext };
