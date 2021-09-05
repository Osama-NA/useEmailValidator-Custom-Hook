import {useState, useEffect} from 'react';

// Email format regex
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Used to validate emails
// If submitted email is invalid, user is alerted and 'email' state resets  
export default function useEmailValidator(value){
    const [email, setEmail] = useState(value);
    
    // Validating email on every 'email' state update
    useEffect(() => {
        if(!email) return;
        
        if(!email.match(regex)){
            alert("Invalid email");
            setEmail("");
        }
    }, [email]);

    return [email, setEmail];
}