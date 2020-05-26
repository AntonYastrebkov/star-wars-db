import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

    state = {
        selectedItem: 5,
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

    onItemSelected = (id) => {
        this.setState({ selectedItem: id });
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
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList 
                            onItemSelected={this.onItemSelected}/>
                    </div>

                    <div className="col-md-6">
                        <PersonDetails 
                            personId={ this.state.selectedItem }/>
                    </div>
                </div>
            </div>
        )
    }
};