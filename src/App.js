import React, { Component } from 'react';
import Publications from './components/Publications';
import SelfBlock from './components/SelfBlock';
import Pics from './components/Pictures';
import Interests from './components/ResearchInterests';
import Header from './components/Header';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './css/academic-icons/css/academicons.min.css';
import './css/font-awesome/css/font-awesome.min.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <div className="main-content">
          <Route exact path="/" component={SelfBlock}/>
          <Route path="/publications" component={Publications}/>
          <Route path="/pictures" component={Pics}/>
          <Route path="/research-interests" component={Interests}/>
        </div>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
