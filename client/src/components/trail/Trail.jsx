// react imports
import React, {useState, useEffect} from 'react';

// axios
import axios from 'axios';

// components
import Map from '../Map';
import EditTrail from './EditTrail';

// seeds
export default function Trail({props}){
    let id = props.match.params.id;
    // let [trailPointsArr, setTrailPointsArr] = useState([]);
    let [trailObj, setTrailObj] = useState({});
    let [newTrailObj, setNewTrailObj] = useState(trailObj)
    let [editTrailOpen, setEditTrailOpen] = useState(false)

    let {name, city, state} = trailObj;
    let {latitude, longitude, length} = trailObj;
    let {imgMedium, summary, difficulty} = trailObj;
    // console.log(trailInfo);
    // const getTrailPointsArr = async () => {
        // }
    useEffect(() => {
        const getTrailInfo = async () => {
            let query = `/api/trails/${id}`;
            let response = await axios.get(query);
            let {trails} = response.data;
            // console.log('trail', trails);
            setTrailObj({...trails});
        }
        getTrailInfo()
    }, [id]) // now this
    // }, []) // orig this
    
    useEffect(() => {
        if (editTrailOpen) {setEditTrailOpen(false);}
    }, [trailObj])

    return(
        <div className='trail'>
            <img className='trail-img' src={imgMedium} alt='' />
            <Map info={{trailObj}} model={'trail'} />
            <div className='trail-name'>{name}</div>
            <div className='trail-location'>{city}, {state}</div>
            <div className='trail-coordinates'>{latitude}, {longitude}</div>
            <div className='trail-description'>
                <div className="trail-length">{length}</div>
                <div className="trail-difficulty">{difficulty}</div>
                <div className="trail-summary">{summary}</div>
            </div>
            <div className="edit-toggle-container">
                <div className="edit-toggle" onClick={() => {setEditTrailOpen(!editTrailOpen)}} >x</div>
                {(editTrailOpen) && <EditTrail trailObj={trailObj} setTrailObj={setTrailObj} />}
            </div>
            {/* <EditTrail trailObj={{trailObj}} /> */}

        </div>
    )
}