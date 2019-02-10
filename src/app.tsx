import React, { Component, useReducer } from 'react';
import logo from './logo.svg';
import './app.scss';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Preview from './components/preview';
import StyleResult from './components/style-result';
import RuleReducer, { initialState, init } from './reducers/rules';

const App = () => {
  const [ ruleState, ruleDispatch ] = useReducer(RuleReducer, initialState, init);
  return (
    <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__body">
          <div className="app__left-column">
            <Sidebar ruleState={ruleState} ruleDispatch={ruleDispatch} />
          </div>
          <div className="app__right-column">
            <div className="app-right__top">
              <Preview ruleState={ruleState} />
            </div>
            <div className="app-right__bottom">
              <StyleResult ruleState={ruleState} />
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;
