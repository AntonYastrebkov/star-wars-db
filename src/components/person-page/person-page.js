import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

import './person-page.css';

export default class PersonPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {

    const itemList = (
      <PersonList 
          onItemSelected={this.onItemSelected} />
    );

    const itemDetails = (
      <PersonDetails itemId={ this.state.selectedItem } />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails}/>
      </ErrorBoundry>
    );
  }
}