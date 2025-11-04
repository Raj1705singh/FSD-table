import {useState} from 'react';
function Greeting() {
  const [Message, setMessage] = useState('hello raj');

  function changeMessage() {
    setMessage('you clicked the button');
    }
    return (
      <div>
        <h2>{Message}</h2>
        <button onClick={changeMessage}>Click me</button>
      </div>
    );
}

export default Greeting;

