import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function EditUser({props}){
    let [userObj, setUserObj] = useState({});
    let id = props.match.params.id
    const getUserInfo = async () => {
        let query = `/api/users/${id}`
        try {
            let response = await axios(query)
            setUserObj({...response.data})
        }catch (error) {console.log(error, "you screwed up")}
    }

    // on page's first render, load the user info
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

    const handleDelete = async (e) => {
        let query = `/api/users/${id}`;
        try{
            let res = await axios.delete(query);
            if (res.data.deleted === 1){
                alert("Deleted user!");
                document.location = '/user/edit';
            }
        } catch (err) {console.log(err)};
    }
    return(
        <div className='user-edit'>
            <div className='user-edit-card' >
                <form onSubmit={submitHandler} >
                   First name:  <input className='input-update-user-firstname' type='text' onChange={(e) => {setUserObj({...userObj, firstName:e.target.value})}} value={userObj.firstName}  />
                   Last name: <input className='input-update-user-lastname' type='text' onChange={(e) => {setUserObj({...userObj, lastName:e.target.value})}} value={userObj.lastName}  />
                    User name: <input className='input-update-user-alias' type='text' onChange={(e) => {setUserObj({...userObj, alias:e.target.value})}} value={userObj.alias}  />
                    <button type='submit'>Submit</button>
                    <button onClick={handleDelete} >Delete</button>
                </form>
            </div>
        </div>
    )
}