import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import Maps from './components/pages/Maps';
import Contacts from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/maps' component={Maps} />
          <Route path='/contact' component={Contacts} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;