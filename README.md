# Project Overview
# Triple-M-P3
![](https://files.slack.com/files-pri/T0351JZQ0-FPM0UN0SU/image.png)
      Mountain Biking
![](https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2F5vAK2sRnNh6Fi%2Fgiphy-downsized.gif)
## Project Description

This application allows cyclists to find trails in select cities. The app maintains a user-generated list of trails, conaining useful information regarding navigation to and from the trail, features, and ratings.

## Wireframes

https://ninjastorage.blob.core.windows.net/html/C32TTFx/4ce915a8-40ed-02cd-3ca9-0b7ed9d1e8a1.html

## API Snippet
This API will be used to convert location name and zip to Lattitude and longitude.

https://api.opencagedata.com/geocode/v1/json?q=New York City&key=15ff9fe808984f1ca9d347f81db54d48


```
 "bounds": {
    "northeast": {
        "lat": -34.5776519,
        "lng": -58.4614548
    },
 }
``` 

#### MVP 
- Create  New trail and user
- Read trail details
- Update a trail description
- Delete user and or trail descriptions
- Render data on page


#### PostMVP

- Add current weather
- add pins on map
- Allow user to choose favorites
- Save their choices in our database
- Add map api to identify a location with trails

## ERD Diagram

https://www.lucidchart.com/invitations/accept/be4e4749-e00d-4e1e-b2de-16ec11283efa

## React Component Hierarchy

https://www.lucidchart.com/invitations/accept/33710cf4-4487-484f-8bd1-163c24fd7710

## Priority Matrix

https://ninjastorage.blob.core.windows.net/html/C32TTFx/578a06b4-20d8-a67e-cd9b-5158bacfb72a.html

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

|   Component  | Description | 
| ------------ | :---: |  
| Nav          | Renders the header/navbar that contains links to TrailList and CityList |
| TrailList    | Renders search, and a list of trails with basic info  + image |
| Trail        | Renders info about individual trail: coordinates + address, distance, location on map + trail view |
| Create Trail | Renders a form to allow user to create a trail |
| Edit Trail   | Renders a form to allow user to edit trail description |
| CityList     | Renders search and a list of cities with basic info (# of trails) + image |
| City         | Renders info about the city: coordinates, all trail id's |
| CreateUser   | Renders form to create user |
| EditUser     | Renders form to allow user to edit profile info or delete |
| User         | Renders user info & favorites |
| Search       | Renders a search form, which allows to search for a specific city or trail |
| Map          | Renders a map with trials around a city and A trail route |
| Footer       | Displays project and team name, creation date. Located at bottom of page |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Search| M | 2 hrs| 1 hrs |1 hrs |
| Adding Trails| H | 4 hrs| 4hrs | 4hrs |
| Adding state  | H | 5 hrs| 2.5hrs | 2.5hrs |
| Adding Map design  | M | 4 hrs| hrs | hrs |
| Adding Map API| M | 4 hrs| 2hrs | 2hrs |
| Adding Nav| M | 2 hrs| 1hrs | 1hrs |
| Adding Geolocation| M | 3 hrs| hrs | hrs |
| Adding Create Trail| M | 2 hrs| 2hrs | 2hrs |
| Building DataBase | H | 2 hrs| 3hrs | 3hrs |
| Building Trails Tables| H | 4 hrs| 3hrs | 3hrs |
| Building state Table| H | 4 hrs| 4hrs | 4hrs |
| Building Trails routes| H | 4 hrs|4 hrs | 4hrs |
| Building state Routes | H | 4 hrs| 4hrs | 4hrs |
| Seeding tables| M | 3 hrs| 1hrs | 1hrs |
| Database Migration | M | 2 hrs| 1hrs | 1 hrs |
| Debugging| M | 4 hrs| 5hrs | 5hrs |
| Project Approval | M | 1 hrs| 1hrs | 1hrs |
| Working with backend api | H | 3 hrs| 3hrs | 3hrs |
| Styling | M | 6 hrs| 6 hrs | 6 hrs |
| testing routes and components| M | 4 hrs| 4 hrs | 4 hrs |
| Total | H | 63 hrs| 51.5 hrs | 51.5 hrs |


## Additional Libraries
 Axios, react-router-dom, react-router, OpenLayers 

## Code Snippet 
backend: 

Gets a single state's info with all trails associated with that state.
```
const getStateByID = async (
    /**@type{express.Request}*/req,
    /**@type{express.Response}*/res) => {
    try{
        const id = req.params.id
        const state = await State.findOne({
            where: {id: id}
        })
        const trails = await Trail.findAll({
            where:{stateId:id}
        })
        return res.status(200).json({state, trails}) 
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

allStatesRouter.get("/states/:id", getStateByID)
```
front end: 
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
**ERROR**: (node:9310) UnhandledPromiseRejectionWarning: SequelizeDatabaseError: relation "state" does not exist
                               
**RESOLUTION**: Needed to move State model above trail model in models.js. Moved await STATE.sync ahead of Trail.syc in resetDb.js
