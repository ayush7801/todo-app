import Form from './Form';
import './Opsarea.css';
function Opsarea(props) {
  function HandleForm(formValue){
    console.log(formValue);
    props.formHandler(formValue);
  }
  return (
    <div className="opsarea">
      <Form formHandler={HandleForm}/>  
    </div>
  );
}

export default Opsarea;
