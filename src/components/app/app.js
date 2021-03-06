import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/dummy-swapi-service';

import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import { withSwapiService } from '../hoc-helper';
import { StarshipDetails } from '../sw-components';
import { 
  PersonPage, 
  PlanetPage, 
  StarshipPage,
  LoginPage,
  SecretPage 
} from '../pages';

import './app.css';

export default class App extends Component {
  
  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
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

    const { isLoggedIn } = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <AppHeader onServiceChange={ this.onServiceChange }/>
              <Planet />

              <Switch>
                <Route 
                    path="/" 
                    render={() => <h2>Welcome to Star Wars DB!</h2>} 
                    exact />
                <Route path="/persons/:id?" component={PersonPage} />
                <Route path="/planets" component={PlanetPage} />
                <Route path="/starships" exact component={StarshipPage} />
                <Route 
                    path="/starships/:id"
                    render={({ match }) => {
                      return <StarshipDetails itemId={match.params.id} />
                    }} />
                <Route 
                    path="/login" 
                    render={() => (
                      <LoginPage 
                          isLoggedIn={isLoggedIn}
                          onLogin={this.onLogin}/>
                    )} />
                <Route 
                    path="/secret"
                    render={() => (
                      <SecretPage isLoggedIn={isLoggedIn} />
                    )} />
                
                <Route render={() => <h2>404: Page not found</h2>}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};