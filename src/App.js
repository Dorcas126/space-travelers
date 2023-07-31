import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './pages/Navigation';
import MyProfileContainer from './pages/Profile';

const App = () => (

  <div>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/myprofile" element={<MyProfileContainer />} />
      </Routes>
    </Container>
  </div>

);

export default App;
