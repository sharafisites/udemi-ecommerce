import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Route , Switch , Link} from 'react-router-dom';

import './App.css';


const HatsPage=()=>(
  <h1> hats page</h1>
)
function App(props) {
  return (
    <div className="App">
      <Switch>
      <Route path="/hats" component={HatsPage}></Route>

      <Route path="/" component={Homepage} ></Route>
      </Switch>
    </div>
  );
}

export default App;
