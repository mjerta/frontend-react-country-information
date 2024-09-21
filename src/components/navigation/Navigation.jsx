import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            <NavLink
              className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
              to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
              to="/country-searcher">CountrySearcher</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;