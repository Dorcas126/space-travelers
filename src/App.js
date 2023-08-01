import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './pages/Navigation';
import Rockets from './pages/rockets/rocket';
import MyProfileContainer from './pages/Profile';

const App = () => (

  <div>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/" exact="true" element={<Rockets />} />
        <Route path="/myprofile" element={<MyProfileContainer />} />
      </Routes>
    </Container>
  </div>

);

export default App;
