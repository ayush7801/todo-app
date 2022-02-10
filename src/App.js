import './App.css';
import { useState } from 'react';
import Tasklist from './Components/TaskList/Tasklist';
import Opsarea from './Components/TaskOps/Opsarea';
function App() {
  const [tasklist,setTasklist] = useState([]);
  function HandleForm(formValue){
    console.log(formValue);
    const newTasklist = [...tasklist,formValue];
    setTasklist(newTasklist);
  }
  return (
    <div className="App">
      <Opsarea formHandler={HandleForm}/>
      <Tasklist tasks={tasklist}/>
    </div>
  );
}

export default App;
