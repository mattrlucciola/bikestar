import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CreateTrail(){
    let [trailObj, setTrailObj] = useState({
        name: '',
        summary: '',
        imgSmall: 'url',
        imgMedium: 'url',
        city: '',
        state: '',
        difficulty: '',
        length: 0,
        latitude: '',
        longitude: ''
    })

    console.log(trailObj);
    
    // console.log('keys', {...Object().keys()});
    let [formArr, setFormArr] = useState([]);
    const submitHandler = async (e) => {
        e.preventDefault();

        // make the call
        let query = `/api/trails/`
        // let userObj = {firstName, lastName, alias};

        try {
            let res = await axios.post(query, trailObj);
            console.log(res);

            // go to home after submit
            document.location = '/trails'
        } catch (err) {console.log(err)}
    }
    const changeHandler = (e, key) => {
        setTrailObj({...trailObj, [key]:e.target.value});
        console.log({...trailObj, [key]:e.target.value});
    }
    const buildForm = () => {
        let formArr = [];
        for (let key in trailObj) {
            let formElem = 
                <div className={`new-trail-${key}`} >
                    {key}<input onChange={
                        (e) => {
                            setTrailObj({...trailObj, [key]:e.target.value});
                            console.log(e.target.value);
                        }
                    } value={trailObj[key]}/>
                </div>
            formArr.push(formElem);
        }
        formArr.push(
            <div className="submit-trail">
                <button type='submit'>Submit</button>
            </div>
        );
        let trailFormArr = formArr
        setFormArr([...trailFormArr])
    }
    useEffect(()=>{
        buildForm()
    },[])
    return(
        <div className='create-trail'>
            <form onSubmit={submitHandler} >
                {formArr}
            </form>
        </div>
    )
}