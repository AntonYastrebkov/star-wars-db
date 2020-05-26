import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import ErrorIndicator from '../error-indicator';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';

import './app.css';

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        isShowRandomPlanet: true,
        hasError: false
    };

    showRandomPlanet = () => {
        this.setState((state) => {
            return {
                isShowRandomPlanet: !state.isShowRandomPlanet
            };
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />;
        }

        const randomPlanet = this.state.isShowRandomPlanet ? 
            <RandomPlanet /> : null;
        return (
            <div className="stardb-app">
                <AppHeader />
                { randomPlanet }
                
                <div className="row mb2 btn-row">
                    <button
                        className="btn btn-warning btn-lg"
                        onClick={this.showRandomPlanet}>
                            Toggle random planet
                    </button>
                    <ErrorButton />
                </div>

                <PersonPage />
            </div>
        );
    }
};