import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/title.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="title">
        <Title headline="Planetas" />
        {planets.map((planetsNow) => (
          <div key={ planetsNow.name }>
            <PlanetCard
              planetName={ planetsNow.name }
              planetImage={ planetsNow.image }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default SolarSystem;
