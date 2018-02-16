import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default class ShelfD extends Component {
  render(){
    return(
      <div>
      <nav className='nav'>
      <Link to='/' className='links'>Shelfie</Link>
        </nav>

      </div>
    )
  }
}
