import './Deadline.css';

function Deadline(props){
    const month = props.deadline.toLocaleString('en-US',{month: 'long'});
    const year = props.deadline.getFullYear();
    const day = props.deadline.toLocaleString('en-US',{day: '2-digit'});
    return (
        <div className='deadline'>
           {`${day} ${month} ${year}`}
        </div>
    );
}

export default Deadline;