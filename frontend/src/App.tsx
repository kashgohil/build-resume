import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from 'views/Homepage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
