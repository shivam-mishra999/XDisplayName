import React, {useState} from 'react';
import styles from './Display.module.css';

export default function Display() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!firstName || !lastName){
            
            return;
        }
        const fullname = `${firstName} ${lastName}`;
        setFullName(fullname);  
    }

  return (
    <div>
      <h1>Full Name Display</h1>
      <form className={styles.form}>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input id="firstName" type="text" value={firstName} onChange={handleFirstName}></input>
        </div>

        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input id="lastName" type="text" value={lastName} onChange={handleLastName}></input>
        </div>

        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      <div className={styles.output}>
        {fullName && 
            <p>Full Name: {fullName}</p>
        }
      </div>
    </div>
  )
}
