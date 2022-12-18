import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

// array of data
const navmenudata = [
  {
    menu: 'Home',
    link: '/',

  },
  {

    menu: 'News',
    link: '/news',

  },
  {
    menu: 'Contact',
    link: '/contact',

  },
  {
    menu: 'About',
    link: '/about',

  },

  {
    menu: 'State',
    link: '/state',

  },

  {
    menu: 'Toggle',
    link: '/toggle',

  },
];

const Navmenu = () => (
  <nav>
    {navmenudata.map((d) => (

      <NavLink activeClassName="active" exact to={d.link}>

        {d.menu}

      </NavLink>

    ))}

  </nav>

);

function navbar() {
  return (
    <div className="navigation">

      <Navmenu />

    </div>
  );
}

export default navbar;
