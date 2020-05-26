import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './person-page.css';

export default class PersonPage extends Component {

    state = {
        selectedItem: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    onItemSelected = (id) => {
        this.setState({ selectedItem: id });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
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
        );
    }
}