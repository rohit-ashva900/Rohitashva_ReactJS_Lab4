// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AddExpense from './components/AddExpense/AddExpense';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddExpense} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

