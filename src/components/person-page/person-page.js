import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './person-page.css';

export default class PersonPage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: 1
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

        const itemDetails = (
            <ItemDetails 
                itemId={ this.state.selectedItem }
                getData={ this.swapiService.getPerson }
                getImageUrl={ this.swapiService.getPersonImage }/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        );
    }
}