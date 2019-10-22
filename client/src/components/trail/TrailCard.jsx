import React from 'react';
export default function CityCard({trailObj}){
    console.log('trailobj',trailObj);
    
    let {name, city, state, latitude, longitude, imgSmall, id} = trailObj;
    return(
        <div className='trail'>
            <div ></div>
            <a className='trail-url' href={`/trails/${id}`} >{name}</a>
            <div className='trail-state'>{state}</div>
            <div className='trail-city'>{city}</div>
            <div className='trail-lat'>{latitude}</div>
            <div className='trail-lon'>{longitude}</div>
            <a className='trail-img-url' url={`/trails/${id}`} ><img className='trail-img' href={imgSmall} /></a>
            
        </div>
    )
}