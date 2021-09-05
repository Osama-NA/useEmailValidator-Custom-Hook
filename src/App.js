import './App.css';
import React, {useState} from 'react';
import useEmailValidator from './useEmailValidator';

function App() {

  const [text, setText] = useState("");
  const [email, setEmail] = useEmailValidator("");
  
  const handleChange = (e) => {
    setText(e.target.value);
  }
  
  const emailHandler = () => {
    setEmail(text);
    setText("");
  };

  return (
    <div className="App">
      <label>Email:</label>
      <input type="text" value={text} onChange={handleChange} required />
      <button onClick={emailHandler} >submit</button>
      <br />
      <br />
      {email?email:"Invalid email, try again"}
    </div>
  );
}

export default App;
