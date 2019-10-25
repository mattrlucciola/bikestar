import React, {useState} from 'react';
import axios from 'axios';

export default function EditTrail({trailObj, setTrailObj, setEditTrailOpen}){
    let [updatedTrailDesc, setUpdatedTrailDesc] = useState(trailObj['summary']);

    const editDescription = (e) => {setUpdatedTrailDesc(e.target.value)}
    const submitHandler = async (e) => {
        e.preventDefault();
        // make the call
        let query = `/api/trails/${trailObj.id}/edit`
        let newTrailObj = {...trailObj, 'summary': updatedTrailDesc}
        try {
            await axios.put(query, newTrailObj);
            setTrailObj({...newTrailObj})
        } catch (err) {console.log(err)}
    }
    const blurHandler = () => {
        setTrailObj({...trailObj})
        setEditTrailOpen(false)
    }
    let inputElem = <input className='input-update-trail-description' type='text' onChange={editDescription} value={updatedTrailDesc} onBlur={blurHandler} autoFocus />

    return(
        <div className='trail-edit'>
            <div className='trail-edit-card' >
                <form onSubmit={submitHandler} >
                    {inputElem}
                </form>
            </div>
        </div>
    )
}