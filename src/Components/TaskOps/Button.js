import './Button.css';
function Button(props) {
  return (
    <div className="button">
      {props.children}
    </div>
  );
}

export default Button;
