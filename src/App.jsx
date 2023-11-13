import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'; // Your new route configuration
import Header from './components/layout/header';
import Footer from './components/layout/footer';

function App() {
  return (
    <Router>
      <Header />
        <Routes />
      <Footer />
    </Router>
  );
}

export default App;
