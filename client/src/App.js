// react imports
import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// general components
import ModelItemsList from './components/ModelList';
import Nav from './components/Nav';
// import Map from './components/Map';

// state components
import State from './components/state/State'

// trail components
import CreateTrail from './components/trail/CreateTrail';
import Trail from './components/trail/Trail';
import EditTrail from './components/trail/EditTrail';

// user components
import NewUser from './components/user/NewUser';
import User from './components/user/User';
import EditUser from './components/user/EditUser';
import EditUserMenu from './components/user/EditUserMenu';

// styling
import './App.css';

//Title
import Doc from './components/Doc'
import Footer from './components/Footer'
function App() {
  let [search, setSearch] = useState('');
  const searchChange = (e) => {
    let searchValue = e.target.value;
    setSearch(searchValue)
  }

  return (
    <BrowserRouter>
      <Doc />
      <div className="App">
        <Nav searchChange={searchChange} search={search}/>
        <Switch>
          <Route exact path='/states/:id' render={(props) => <State props={props} />} />
          <Route exact path='/states'><ModelItemsList model={'state'} search={search} /></Route>
          <Route exact path='/trails/new'><CreateTrail /></Route>
          <Route exact path='/trails/:id/edit'><EditTrail /></Route>
          <Route exact path='/trails/:id' render={(props) => <Trail props={props} />} />
          <Route exact path='/trails'><ModelItemsList model={'trail'} search={search} /></Route>
          <Route exact path='/user/:id/edit'render={(props) => <EditUser props={props} />} />
          <Route exact path='/user/edit'><EditUserMenu /></Route>
          <Route exact path='/user/new'><NewUser /></Route>
          <Route exact path='/user'><User /></Route>
          <Route exact path='/'></Route>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
