import React, { Component, useReducer, useState } from 'react';
import logo from './logo.svg';
import './app.scss';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Preview from './components/preview';
import StyleResult from './components/style-result';
import RuleReducer, { initialState, init } from './reducers/rules';
import classnames from 'classnames';

const App = () => {
  const [ ruleState, ruleDispatch ] = useReducer(RuleReducer, initialState, init);
  const [ sidebarOpen, toggleSidebar ] = useState(true);
  const [ element, changeElement ] = useState('div');
  return (
    <div className="app">
        <div className="app__header">
          <Header 
            sidebarOpen={sidebarOpen} 
            toggleSidebar={toggleSidebar}
            element={element} 
            changeElement={changeElement}  />
        </div>
        <div className="app__body">
          <div className={classnames('app__left-column', { 'app__left-column--closed': !sidebarOpen })}>
            <Sidebar ruleState={ruleState} ruleDispatch={ruleDispatch} />
          </div>
          <div className="app__right-column">
            <div className="app-right__top">
              <Preview ruleState={ruleState} element={element} />
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
