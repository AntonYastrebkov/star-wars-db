import React from 'react';

import ItemList from '../item-list';
import { withData } from '../hoc-helper';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();

const withRenderName = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    );
  };
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>

const PersonList = withData(
                    withRenderName(ItemList, renderName), 
                    swapiService.getAllPeople);

const PlanetList = withData(
                    withRenderName(ItemList, renderName), 
                    swapiService.getAllPlanets);

const StarshipList = withData(
                    withRenderName(ItemList, renderNameAndModel), 
                    swapiService.getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};