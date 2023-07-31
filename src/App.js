import React from 'react';
import { Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './pages/Navigation';

const App = () => (

  <div>
    <Navigation />
    <Container>
      <Routes />
    </Container>
  </div>

);

export default App;
