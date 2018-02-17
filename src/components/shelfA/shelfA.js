import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default class ShelfA extends Component {
  render(){
    return(
      <div>

      <div className='shelf'>
      <nav className='nav'>


      <Link to='/' className='links'>Shelfie</Link>
      <Link to='/shelfA' className='links'>Shelf A</Link>

      </nav>
      </div>
      </div>

    )
  }
}
