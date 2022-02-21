import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard'

class SolarSystem extends React.Component {
  render() {
    return (
        <div data-testid="solar-system">
          <Title headline="Planetas" />
          {planets.map((planetsNow) => (
            <div key={ planetsNow.name }>
            <PlanetCard 
            planetName={ planetsNow.name }
            planetImage={ planetsNow.image }
            />
          </div>))}
        </div>
    );
  }
}

export default SolarSystem;
