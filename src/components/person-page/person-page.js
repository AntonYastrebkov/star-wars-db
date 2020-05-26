import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './person-page.css';



export default class PersonPage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: null
    };

    

    onItemSelected = (id) => {
        this.setState({ selectedItem: id });
    };

    render() {
        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople}>

                {({name, birthYear}) => `${name} (${birthYear})`}
            </ItemList>
        );

        const personDetails = (
            <PersonDetails 
                personId={ this.state.selectedItem }/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        );
    }
}