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
        latitude: null,
        longitude: null
    })
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

    const buildForm = () => {
        let formArr = [];
        for (let key in trailObj) {
            let formElem = (
                <div className={`new-trail-${key}`} >
                    <input onChange={()=>{}} value={trailObj[key]}/>
                </div>
            )
            formArr.push(formElem);
        }
        formArr.push(
            <div className="submit-trail">
                <button type='submit'>Submit</button>
            </div>
        );

        let trailFormArr = formArr
            // <form onSubmit={submitHandler}>
                
            // {/* </form> */}
        
        setFormArr([...trailFormArr])
    }
    useEffect(()=>{
        buildForm()
    },[])
    return(
        <div className='create-trail'>
            <form onSubmit={submitHandler} >
                {/* <div className="first-name">
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
                </div> */}
                {/* <div className="submit-trail">
                    <button type='submit'>Submit</button>
                </div> */}
                {formArr}
            </form>
        </div>
    )
}