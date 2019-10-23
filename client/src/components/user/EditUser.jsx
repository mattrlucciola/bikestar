import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function EditUser({props}){
    let [userObj, setUserObj] = useState({}) 
    let id = props.match.params.id
    const getUserInfo = async () => {
        let query = `/api/users/${id}`
        try {
            let response = await axios(query)
            setUserObj({...response.data})
        }catch (error) {console.log(error, "you screwed up")}
    }

    useEffect(() => {getUserInfo()},[])

    const submitHandler = async (e) => {
        e.preventDefault();
        // make the call
        let query = `/api/users/${id}/edit`
        let newUserObj = {...userObj}
        try {
            let resp = await axios.put(query, {...newUserObj});
            document.location = '/user/edit';
        } catch (err) {console.log(err)}
    }

    return(
        <div className='user-edit'>
            <div className='user-edit-card' >
                <form onSubmit={submitHandler} >
                    <input className='input-update-user-firstname' type='text' onChange={(e) => {setUserObj({...userObj, firstName:e.target.value})}} value={userObj.firstName}  />
                    <input className='input-update-user-lastname' type='text' onChange={(e) => {setUserObj({...userObj, lastName:e.target.value})}} value={userObj.lastName}  />
                    <input className='input-update-user-alias' type='text' onChange={(e) => {setUserObj({...userObj, alias:e.target.value})}} value={userObj.alias}  />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}