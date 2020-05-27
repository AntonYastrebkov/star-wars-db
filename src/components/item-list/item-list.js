import React from 'react';

import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children } = props;

  const items = data.map((item) => {
    return (
      <li className="list-group-item"
          key={ item.id }
          onClick={() => onItemSelected(item.id)}>
        { children(item) }
      </li>
    );
  });
  
  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
};

export default ItemList;