import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CreateTrail(){
    let [trailObj, setTrailObj] = useState({
<<<<<<< HEAD
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
=======
        name: {val:'', idx: 0},
        summary: {val:'',idx:1},
        imgSmall: {val:'url',idx:2},
        imgMedium: {val:'url',idx:3},
        city: {val:'',idx:4},
        state: {val:'',idx:5},
        difficulty: {val:'',idx:6},
        length: {val:0,idx:7},
        latitude: {val:'',idx:8},
        longitude: {val:'',idx:9},
>>>>>>> Marcos
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
<<<<<<< HEAD
    const changeHandler = (e, key) => {setTrailObj({...trailObj, [key]:e.target.value})};

    return(
        <div className='create-trail'>
            <form onSubmit={submitHandler} >
                Name<div classname='name'><input onChange={(e) => {changeHandler(e, 'name')}} value={trailObj['name']} key={`input-trail-${'name'}`} /></div>
                City<div classname='city'><input onChange={(e) => {changeHandler(e, 'city')}} value={trailObj['city']} key={`input-trail-${'city'}`} /></div>
                State<div classname='state'><input onChange={(e) => {changeHandler(e, 'state')}} value={trailObj['state']} key={`input-trail-${'state'}`} /></div>
                Latitude<div classname='latitude'><input onChange={(e) => {changeHandler(e, 'latitude')}} value={trailObj['latitude']} key={`input-trail-${'latitude'}`} /></div>
                Longitude<div classname='longitude'><input onChange={(e) => {changeHandler(e, 'longitude')}} value={trailObj['longitude']} key={`input-trail-${'longitude'}`} /></div>
                Length (Miles)<div classname='length'><input onChange={(e) => {changeHandler(e, 'length')}} value={trailObj['length']} key={`input-trail-${'length'}`} /></div>
                Difficulty<div classname='difficulty'>
                    <select onChange={(e) => {changeHandler(e, 'difficulty')}} >
                        <option value="Green">Green</option>
                        <option value="Green/Blue">Green/Blue</option>
                        <option value="Blue">Blue</option>
                        <option value="Blue/Black">Blue/Black</option>
                        <option value="Black">Black</option>
                    </select>
                </div>
                Summary<div classname='summary'><input onChange={(e) => {changeHandler(e, 'summary')}} value={trailObj['summary']} key={`input-trail-${'summary'}`} /></div>
                Image URL<div classname='image'><input onChange={(e) => {changeHandler(e, 'imgMedium')}} value={trailObj['imgMedium']} key={`input-trail-${'imgMedium'}`} /></div>
=======
    const changeHandler = (e, key) => {
        setTrailObj({...trailObj, [key]: e.target.value });
    }

    const buildForm = () => {
        let formArr = [];
        for (let key in trailObj) {
            let formElem = 
                <div className={`new-trail-${key}`} >
                    {key}<input onChange={
                        (e) => {changeHandler(e, key)}
                    } value={trailObj[key].val}/>
                </div>
            formArr.push(formElem);
        }
        formArr.push(
            <div className="submit-trail">
                <button type='submit'>Submit</button>
            </div>
        );
        return formArr;
        // setNewFormArr(formArr)
    }
    // useEffect(()=>{
    //     buildForm()
    // },[])
    return(
        <div className='create-trail'>
            <form onSubmit={submitHandler} >
                {buildForm()}
>>>>>>> Marcos
            </form>
        </div>
    )
}