import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/solarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
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
