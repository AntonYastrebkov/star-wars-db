import React from 'react';

import './app-header.css';

const AppHeader = ({ onServiceChange }) => {
  return (
    <div className="app-header d-flex">
      <h3><a href="#/">Star Wars DB</a></h3>

      <ul className="d-flex">
        <li>
          <a href="#/people">People</a>
        </li>
        <li>
          <a href="#/planets">Planets</a>
        </li>
        <li>
          <a href="#/starships">Starships</a>
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