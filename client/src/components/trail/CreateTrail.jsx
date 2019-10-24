import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CreateTrail(){
    let [trailObj, setTrailObj] = useState({
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
            </form>
        </div>
    )
}