import React, { Component } from 'react';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

    render() {
        return (
            <div>
                <AppHeader />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>

                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>

            </div>
        )
    }
};