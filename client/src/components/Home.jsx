import React, { Component } from 'react';
// import HikeList from './HikeList'
// import SearchResults from './SearchResults'
import axios from 'axios';
import '../App.css';

//import Map
import Map from './Map'




class Home extends Component {
    constructor() {
        super()
        this.state = {
            trails: [],
            trailId: 0,
            lat: '',
            lon: ''
        }
    }
    async componentDidMount() {
        this.axiosCallByCoordinates()


    }

    axiosCallByCoordinates() {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(async position => {
                let lat = position.coords.latitude;

                let lon = position.coords.longitude;
              
                this.setState({
                    lat: lat,
                    lon: lon
                })
                const url = `https://www.mtbproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lon}&maxResults=10&key=200602842-d85aaa22cf9dc2a1ba17569b62a04f4e`
                const response = await axios(url)
                console.log(response.data.trails)
                this.setState({
                    trails: response.data.trails,
                })
            }, 
                error => {
                    console.log("Error:", error)
                },
                { enableHighAccuracy: true })
        }
    }

    handleClick = (trailId) => {
        this.setState({
            trailId: trailId
        })
    
        console.log(trailId)
    }

    parseSearch = async (lat, lon) =>{
        console.log(lat, lon);
        const url = `https://www.mtbproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxResults=10&key=200602842-d85aaa22cf9dc2a1ba17569b62a04f4e`
                const response = await axios(url)
                console.log(response.data.trails)
                this.setState({
                    trails: response.data.trails,
                })
    }

    render() {
        return (
            <div className="biketrails">
                {/* <SearchResults coordinates={this.getCoordinates} handleSearchResult={this.parseSearch} />
                <HikeList trailId={this.state.trailId} trails={this.state.trails} handleClick={this.handleClick} /> */}
                 <Map className= 'Home-map' />
            </div>
        );
    }
}

export default Home;

// info={trailObj} model={'trail'} 