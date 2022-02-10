import './Form.css';
function Form(props) {
  function HandleSubmit(e){
    e.preventDefault();
    const newtitle = document.getElementById('title-input');
    const newdate = document.getElementById('date-input');
    const newtime = document.getElementById('time-input');

    const newTask = {
      title: newtitle.value,
      date: new Date(newdate.value),
      time: newtime.value
    };
    props.formHandler(newTask);
  }
  return (
    <form className="form" onSubmit={HandleSubmit}>
      <div className='container'>
        <label for='title-input'>Title : </label>  
        <input type='text' id='title-input' placeholder='Title'></input>
      </div>
      <div className='container'>
        <label for='date-input'>Date : </label>  
        <input type='date' id='date-input'></input>
      </div>
      <div className='container'>
        <label for='time-input'>Time : </label>  
        <input type='time' id='time-input'></input>
      </div>
      <button type='submit'>Add Task</button>
    </form>
  );
}

export default Form;
