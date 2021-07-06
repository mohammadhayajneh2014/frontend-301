import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Favorite from './component/Favorite';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Switch>
            <Route exact path="/"> <Home/></Route>
            
            <Route path="/Favorite"><Favorite/></Route>

          </Switch>
        </Router>
      </>
    )
  }
}

export default App;