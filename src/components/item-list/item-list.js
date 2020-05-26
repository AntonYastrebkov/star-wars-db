import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((peopleList) => {
                this.setState({ peopleList: peopleList });
            });
    }

    renderListItem(items) {
        return items.map((item) => {
            return (
                <li className="list-group-item"
                    key={ item.id }
                    onClick={() => this.props.onItemSelected(item.id)}>
                    { item.name }
                </li>
            );
        });
    }

    render() {
        const { peopleList } = this.state;
        if (peopleList === null) {
            return <Spinner />;
        }

        const items = this.renderListItem(peopleList);
        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    }
}