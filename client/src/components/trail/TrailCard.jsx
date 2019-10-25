import React from 'react';
// import EditTrail from './EditTrail';
export default function TrailCard({trailObj}){
    
    let {name, city, state, latitude, longitude, imgSmall, id} = trailObj;
    return(
        <div className='trail'>
            <a className='trail-img-url' href={`/trails/${id}`} ><img className='trail-img' alt='' src={imgSmall} width="200px"/></a>
            <div className='trail-info-container'>
<<<<<<< HEAD
                <div className='trail-url'><a href={`/trails/${id}`} >Trail: {name}</a></div>
                <div className='trail-location'>Location: {city}, {state}</div>
                <div className='trail-lat'>Latitude: {latitude}</div>
                <div className='trail-lon'>Longitude: {longitude}</div>
=======
                <div className='trail-url'><a href={`/trails/${id}`} > {name}</a></div>
                <div className='trail-location'>City: {city}</div>
                <div>State: {state}</div>
                <div className='trail-lat'>{latitude}</div>
                <div className='trail-lon'>{longitude}</div>
>>>>>>> Marcos
            </div>
        </div>
    )
}