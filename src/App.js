import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './pages/Navigation';
import Rockets from './pages/rockets/rocket';

const App = () => (

  <div>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/rockets" exact="true" element={<Rockets />} />
        {/* Add more routes and components as needed */}
      </Routes>
    </Container>
  </div>

);

export default App;
