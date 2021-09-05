# useEmailValidator
### Email Validation Custom Hook
 
## Use
Used to validate emails by simply checking the email format, in case the given email is invalid, the email state resets and the user is informed by a "Invalid email" alert.
 
## Declaration
useEmailValidator is declared just like the useState hook,
```sh
const [email, setEmail] = useEmailValidator("");
```
 
## Usage Example
 
```sh
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
```
 
## Code
 
```sh
import {useState, useEffect} from 'react';

// Email format regex
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function useEmailValidator(value){
    const [email, setEmail] = useState(value);
    
    // Validating email on 'email' state update
    useEffect(() => {
        if(!email) return;
        
        if(!email.match(regex)){
            alert("Invalid email");
            setEmail("");
        }
    }, [email]);

    return [email, setEmail];
}
```
[try useEmailValidator](https://link-url-here.org)
