import React from 'react';

import ItemList from '../item-list';
import { withSwapiService, withData, withRenderName, compose } from '../hoc-helper';

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships };
};

const PersonList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withRenderName(renderName)
                  )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withRenderName(renderName)
                  )(ItemList);
 
const StarshipList = compose(
                    withSwapiService(mapStarshipMethodsToProps),
                    withData,
                    withRenderName(renderNameAndModel)
                  )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};