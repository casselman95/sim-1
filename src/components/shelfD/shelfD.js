import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default class ShelfD extends Component {
  render(){
    return(
      <div>

      <div className='shelf'>
      <nav className='nav'>


      <Link to='/' className='links'>Shelfie</Link>
      <Link to='/shelfA' className='links'>Shelf D</Link>

      </nav>
      </div>
      </div>
    )
  }
}
