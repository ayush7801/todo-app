import Button from './Button';
import Form from './Form';
import './Opsarea.css';
function Opsarea() {
  return (
    <div className="opsarea">
      <Form />  
      <Button>Add Task</Button>
    </div>
  );
}

export default Opsarea;
