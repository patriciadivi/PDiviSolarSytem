import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missionNow) => (
          <div key={ missionNow.name }>
            <MissionCard
              name={ missionNow.name }
              year={ missionNow.year }
              country={ missionNow.country }
              destrination={ missionNow.destination }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Mission;
