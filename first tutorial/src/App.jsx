import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Content from './components/content/content';
import Statecontain from './components/state/State';
import Toggles from './components/toggle/toggle';

const Home = () => (
  <div className="site">
    <title>Home Page</title>
    <Banner />
    <Content types="Home" />

  </div>

);

const News = () => (
  <div className="news">
    <title>News Page</title>
    <Banner />
    <Content types="News" />
  </div>
);

const Contact = () => (
  <div className="contact">
    <title>Contact Page</title>
    <Banner />
    <Content types="Contact" />
  </div>
);

const About = () => (
  <div className="about">
    <title>About Page</title>
    <Banner />
    <Content types="About" />
  </div>
);

const State = () => (
  <div className="state">
    <title>State Function</title>
    <Statecontain />
  </div>
);

const Toggle = () => (
  <div className="toggle">
    <title>Task Page</title>
    <Toggles />
  </div>
);

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/state" component={State} />
        <Route exact path="/toggle" component={Toggle} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
