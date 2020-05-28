import React from 'react';
import { Link } from 'react-router-dom';

import './app-header.css';

const AppHeader = ({ onServiceChange }) => {
  return (
    <div className="app-header d-flex">
      <h3><Link to="/">Star Wars DB</Link></h3>

      <ul className="d-flex">
        <li>
          <Link to="/persons/">Persons</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>

      <button 
          className="btn btn-sm btn-primary"
          onClick={ onServiceChange }>
        Change service
      </button>
    </div>
  );
};

export default AppHeader;