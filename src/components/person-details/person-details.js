import React, { Component } from 'react';

import './person-details.css';

export default class PersonDetails extends Component {

    render() {
        return (
            <div className="person-details card">
                <img className="person-image"
                    src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />
                
                <div className="card-body">
                    <h4>C3PO</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth year</span>
                            <span>42</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color</span>
                            <span>gold</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}