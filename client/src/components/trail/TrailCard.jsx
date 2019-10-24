import React from 'react';
// import EditTrail from './EditTrail';
export default function TrailCard({trailObj}){
    
    let {name, city, state, latitude, longitude, imgSmall, id} = trailObj;
    return(
        <div className='trail'>
            <a className='trail-img-url' href={`/trails/${id}`} ><img className='trail-img' alt='' src={imgSmall} width="200px"/></a>
            <div className='trail-info-container'>
                <div className='trail-url'><a href={`/trails/${id}`} >Trail: {name}</a></div>
                <div className='trail-location'>Location: {city}, {state}</div>
                <div className='trail-lat'>Latitude: {latitude}</div>
                <div className='trail-lon'>Longitude: {longitude}</div>
            </div>
        </div>
    )
}