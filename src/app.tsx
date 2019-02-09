import React, { Component } from 'react';
import logo from './logo.svg';
import './app.scss';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Preview from './components/preview';
import StyleResult from './components/style-result';

const App = () => (
  <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__left-column">
          <Sidebar />
        </div>
        <div className="app__right-column">
          <div className="app-right__top">
            <Preview />
          </div>
          <div className="app-right__bottom">
            <StyleResult />
          </div>
        </div>
    </div>
  </div>
);

export default App;
