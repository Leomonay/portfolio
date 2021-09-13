import React from 'react'
import {
NavLink
} from 'react-router-dom'
import './index.css';

export default function NavBar() {
  return (
    <div className='navBarContainer'>
        <div className='navBarTitle'>Leo Monay's Portfolio</div>
        <div className='navBarButtons'>
        <NavLink to='/about' className='navBarLink' activeClassName='activeLink'>About</NavLink>
        <NavLink to='/skills' className='navBarLink' activeClassName='activeLink'>Skills</NavLink>
        <NavLink to='/projects' className='navBarLink' activeClassName='activeLink'>Projects</NavLink>
        </div>
    </div>
  );
}