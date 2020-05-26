import React, { Component } from 'react';

import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {

        const { getData } = this.props;
        getData()
            .then((itemList) => {
                this.setState({ itemList });
            });
    }

    renderListItem(items) {

        return items.map((item) => {
            return (
                <li className="list-group-item"
                    key={ item.id }
                    onClick={() => this.props.onItemSelected(item.id)}>
                    { this.props.children(item) }
                </li>
            );
        });
    }

    render() {
        const { itemList } = this.state;
        if (itemList === null) {
            return <Spinner />;
        }

        const items = this.renderListItem(itemList);
        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    }
}