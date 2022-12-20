import React from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Details from '../../pages/Details';

const Routes = () => {
  return (
    <div>
      <Router>
      <Switch>
          <Route path="/details">
           <Details/>
          </Route>
          <Route path="/">
           <Details/>
          </Route>
        </Switch>
      </Router>
        </div>

  )
}

export default Routes

