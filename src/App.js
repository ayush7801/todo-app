import './App.css';
import { useState, createContext } from 'react';
import Tasklist from './Components/TaskList/Tasklist';
import Opsarea from './Components/TaskOps/Opsarea';
const TaskContext = createContext();
function App() {
  const [tasklist, setTasklist] = useState([]);
  function HandleForm(formValue) {
    const newTasklist = [...tasklist, formValue];
    setTasklist(newTasklist);
  }
  return (
    <div className="App">
      <TaskContext.Provider value={HandleForm}>
        <Opsarea HandleForm={HandleForm} />
        <Tasklist tasks={tasklist} />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
export { TaskContext };
