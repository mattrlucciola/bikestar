import React, {useState} from 'react';
import axios from 'axios';
export default function NewUser(){
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [alias, setAlias] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();
        // make the call
        let query = `/api/users/`
        let userObj = {firstName, lastName, alias};
        try {
            let res = await axios.post(query, userObj);
            console.log(res);

            // go to home after submit
            document.location = '/'
        } catch (err) {console.log(err)}
    }

    return(
        <div className='user-new'>
            <form onSubmit={submitHandler} >
                <div className="first-name">
                    {`First Name: `} 
                    <input type='text' onChange={(e) => {setFirstName(e.target.value)}} value={firstName} />
                </div>
                <div className="last-name">
                    {`Last Name: `}
                    <input type='text' onChange={(e) => {setLastName(e.target.value)}} value={lastName} />
                </div>
                <div className="alias">
                    {`Username: `}
                    <input type='text' onChange={(e) => {setAlias(e.target.value)}} value={alias} />
                </div>
                <div className="submit-user">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}