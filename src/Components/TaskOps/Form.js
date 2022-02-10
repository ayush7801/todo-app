import './Form.css';
function Form() {
  return (
    <div className="form">
      <div>
        <label for='title-input'>Title : </label>  
        <input type='text' id='title-input' placeholder='Title'></input>
      </div>
      <div>
        <label for='date-input'>Date : </label>  
        <input type='date' id='date-input'></input>
      </div>
      <div>
        <label for='time-input'>Time : </label>  
        <input type='time' id='time-input'></input>
      </div>
    </div>
  );
}

export default Form;
