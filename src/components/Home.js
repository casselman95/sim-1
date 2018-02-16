import React, {Component} from 'react';
import {Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="box">
      <nav className='nav'>
      <Link to='/' className='links'>Shelfie</Link>
      </nav>
      <div className='group'>
      <Link to='/shelfA'>Shelf A</Link>
      <Link to='/shelfB'>Shelf B</Link>
      <Link to='/shelfC'>Shelf C</Link>
      <Link to='/shelfD'>Shelf D</Link>
      </div>
      </div>
    );
  }
}
