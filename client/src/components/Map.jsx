import React, { useState, useEffect} from 'react';
import ReactMapGL, {GeolocateControl} from 'react-map-gl'


const geolocateStyle ={
  float: 'left',
  margin: '50px',
  padding: '10px'
}


export default function Map(info){
  
  
  const {latitude,longitude} = info
  // console.log('lat',latitude, '   long',longitude);
  
  
    const viewPortWidth = () => {
        if(window.innerWidth < 500){
        return window.innerWidth
        }return window.innerWidth*.3
    
    }
    const viewPortHeight = () => {
        if(window.innerWidth < 500){
        return window.innerHeight*.4
        }return window.innerHeight
    
    }
    const viewPortZoom = () => {
      if(window.innerWidth < 500){
      return 6
      }return 8.75
    
    }
   


    const [viewport, setViewport] = useState({
      width:viewPortWidth(),
      height:viewPortHeight(),
      latitude: latitude, 
      longitude: longitude,
      zoom:viewPortZoom()
    });
    
    
    
    const changeViewPort = () =>{
    
      const newport = {
        ...viewport,
        width:viewPortWidth(),
        height:viewPortHeight(),
        
      }
      setViewport(newport)
    }
    
    useEffect(() => {
      window.addEventListener("resize", changeViewPort)
    }, []);
    
    const _onViewportChange = viewport => {
      setViewport(viewport)
    }
    
      return (
        <div className="App">
         <ReactMapGL
                    width={viewport.width}
                    height={viewport.height}
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
                    zoom={viewport.zoom}
                    mapboxApiAccessToken='pk.eyJ1IjoibHVuYXRpYzI0MjAiLCJhIjoiY2syM21ndDh1MGdnejNjcGh5bW81dXdjdSJ9.ewN7SVmckWbKz3dcY_mu8g'
                    
                    onViewportChange={_onViewportChange}
                > <GeolocateControl
                style={geolocateStyle}
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
              />
          </ReactMapGL>

        </div>
      );
    }
    