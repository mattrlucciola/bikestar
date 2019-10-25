import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CreateTrail(){
    let [trailObj, setTrailObj] = useState({
        name:'',
        summary:'',
        imgSmall:'url',
        imgMedium:'url',
        city:'',
        state:'',
        difficulty:'green',
        length:0,
        latitude:'',
        longitude:'',
    })
    // let keysList = Object.keys(trailObj)
    
    // let [newFormArr, setNewFormArr] = useState([])
    const submitHandler = async (e) => {
        e.preventDefault();

        // make the call
        let query = `/api/trails/`
        try {
            let res = await axios.post(query, trailObj);
            console.log(res);

            // go to home after submit
            document.location = '/trails'
        } catch (err) {console.log(err)}
    }
    const changeHandler = (e, key) => {setTrailObj({...trailObj, [key]:e.target.value})};

    return(
        <div className='create-trail'>
            <form onSubmit={submitHandler} >
                NamE<div className='name'><input onChange={(e) => {changeHandler(e, 'name')}} value={trailObj['name']} key={`input-trail-${'name'}`} /></div>
                City<div className='city'><input onChange={(e) => {changeHandler(e, 'city')}} value={trailObj['city']} key={`input-trail-${'city'}`} /></div>
                State<div className='state'><input onChange={(e) => {changeHandler(e, 'state')}} value={trailObj['state']} key={`input-trail-${'state'}`} /></div>
                Latitude<div className='latitude'><input onChange={(e) => {changeHandler(e, 'latitude')}} value={trailObj['latitude']} key={`input-trail-${'latitude'}`} /></div>
                Longitude<div className='longitude'><input onChange={(e) => {changeHandler(e, 'longitude')}} value={trailObj['longitude']} key={`input-trail-${'longitude'}`} /></div>
                Length (Miles)<div className='length'><input onChange={(e) => {changeHandler(e, 'length')}} value={trailObj['length']} key={`input-trail-${'length'}`} /></div>
                Difficulty<div className='difficulty'>
                    <select onChange={(e) => {changeHandler(e, 'difficulty')}} >
                        <option value="Green">Green</option>
                        <option value="Green/Blue">Green/Blue</option>
                        <option value="Blue">Blue</option>
                        <option value="Blue/Black">Blue/Black</option>
                        <option value="Black">Black</option>
                    </select>
                </div>
                Summary<div className='summary'><input onChange={(e) => {changeHandler(e, 'summary')}} value={trailObj['summary']} key={`input-trail-${'summary'}`} /></div>
                Image URL<div className='image'><input onChange={(e) => {changeHandler(e, 'imgMedium')}} value={trailObj['imgMedium']} key={`input-trail-${'imgMedium'}`} /></div>
            </form>
        </div>
    )
}