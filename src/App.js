import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './pages/Navigation';
import Rockets from './components/rockets/rocket';
import MyProfileContainer from './pages/Profile';
// import MissionsList from './components/mission/MissionsList';

const App = () => (

  <div>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/" exact="true" element={<Rockets />} />
        <Route path="/myprofile" element={<MyProfileContainer />} />
        {/* <Route path="/missions" element={<MissionsList />} /> */}
      </Routes>
    </Container>
  </div>

);

export default App;
