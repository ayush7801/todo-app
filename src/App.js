import './App.css';
import Tasklist from './Components/TaskList/Tasklist';
import Opsarea from './Components/TaskOps/Opsarea';
function App() {
  let tasklist = [{
    title: 'Starters 25',
    date: new Date(2021,2,10)
  }];
  return (
    <div className="App">
      <Opsarea />
      <Tasklist tasks={tasklist}/>
    </div>
  );
}

export default App;
