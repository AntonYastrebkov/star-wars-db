import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorIndicator from '../error-indicator';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import { withSwapiService } from '../hoc-helper';
import { PersonPage, PlanetPage, StarshipPage } from '../pages';

import './app.css';

export default class App extends Component {
  
  state = {
    hasError: false,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? 
                          DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
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

    const Planet = withSwapiService((swapiService) => {return {getPlanet: swapiService.getPlanet}})
                      (RandomPlanet);

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <AppHeader onServiceChange={ this.onServiceChange }/>
            <Planet />
                    
            <div className="row mb2 btn-row">
              <ErrorButton />
            </div>

            <PersonPage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};