import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import shelfA from './components/shelfA/shelfA.js'
import shelfB from './components/shelfB/shelfB.js'
import shelfC from './components/shelfC/shelfC.js'
import shelfD from './components/shelfD/shelfD.js'


export default(
  <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/shelfA' component={shelfA}/>
    <Route path='/shelfB' component={shelfB}/>
    <Route path='/shelfC' component={shelfC}/>
    <Route path='/shelfD' component={shelfD}/>
  </Switch>
)
