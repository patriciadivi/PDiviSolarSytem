import React from 'react';
import Header from './components/Header';
// import Title from './components/Title';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
      </main>
    );
  }
}

export default App;
