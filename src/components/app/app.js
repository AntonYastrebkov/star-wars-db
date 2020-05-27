import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import ErrorIndicator from '../error-indicator';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorButton from '../error-button';
import { SwapiServiceProvider } from '../swapi-service-context';


import './app.css';
import ErrorBoundry from '../error-boundry';

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

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;
        
    const personDetails = (
      <ItemDetails 
          itemId={11} 
          getData={ getPerson }
          getImageUrl={ getPersonImage }>
                
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
          itemId={5} 
          getData={ getStarship }
          getImageUrl={ getStarshipImage }>
            
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
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

            <Row
                left={personDetails} right={starshipDetails} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};