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
      <Link to='/shelfA'><button>Shelf A</button></Link>
      <Link to='/shelfB'><button>Shelf B</button></Link>
      <Link to='/shelfC'><button>Shelf C</button></Link>
      <Link to='/shelfD'><button>Shelf D</button></Link>
      </div>
      </div>
    );
  }
}
