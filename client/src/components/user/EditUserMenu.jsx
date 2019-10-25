import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import UserCard from './UserCard'

export default function EditUserMenu(){
    let [usersArr, setUsersArr] = useState([]);
    const getUsers = async () => {
        try {
            let query = `/api/users`;
            let response = await axios.get(query)
            setUsersArr([...response.data.users])
            
        } catch (err) {console.log(err)}
    }
    useEffect(()=>{
        getUsers();
    },[])
    return(
        <div className='edit-user-menu'>
            {usersArr.map((user, idx) => {
                return  <Link to={`/user/${user.id}/edit`}><UserCard userObj={user} key={`ucrd-${idx}`} /></Link>
            })}
        </div>
    )
}