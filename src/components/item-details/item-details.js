import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorButton from '../error-button';
import SwapiService from '../../services/SwapiService';

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{ item[field] }</span>
        </li>
    );
};

export { Record };

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({ loading: true });
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ 
                    item,
                    image: getImageUrl(item), 
                    loading: false });
            });
    }

    render() {
        if (!this.state.item || this.state.loading) {
            return (
                <div className="person-details card">
                    <Spinner />
                </div>
            )
        }

        const { item, image } = this.state;
        const { name } = item; 
        return (
            <div className="person-details card">
                <img className="person-image" alt="Person icon"
                    src={ image } />
                
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>

                    <ErrorButton />
                </div>
            </div>
        );
    }
}