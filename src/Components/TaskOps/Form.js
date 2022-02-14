import './Form.css';
function Form(props) {
  let flagT=0,flagD=0,flagTi=0;
  function HandleSubmit(e){
    e.preventDefault();
    const newtitle = document.getElementById('title-input');
    const newdate = document.getElementById('date-input');
    const newtime = document.getElementById('time-input');
    
    if(newtitle.value==''){
      newtitle.classList.add('invalid');
      flagT=1;
    }else if(flagT){
      newtitle.classList.remove('invalid');
      flagT=0;
    }
    if( newdate.value=='' ){
      newdate.classList.add('invalid');
      flagD=1;
    }else if(flagD){
      newdate.classList.remove('invalid');
      flagD=0;
    }
    if(newtime.value==''){
      newtime.classList.add('invalid');
      flagTi=1;
    }else if(flagTi){
      newtime.classList.remove('invalid');
      flagTi=0;
    }
    else{
      if(flagT==1){
        newtitle.classList.remove('invalid');
        flagT=0;
      }
      if(flagD==1){
        newdate.classList.remove('invalid');
        flagD=0;
      }
      if(flagTi==1){
        newtime.classList.remove('invalid');
        flagTi=0;
      }
      const newTask = {
        title: newtitle.value,
        date: new Date(newdate.value),
        time: newtime.value,
        taskStatus: 'Planned'
      };
      newtitle.value='';
      newdate.value=undefined;
      newtime.value=undefined;
      props.formHandler(newTask);
    }
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
