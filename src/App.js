import React from 'react';
import { Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Listings } from './components/ListingsAnt';
import { Ant } from './components/ListingsBS';

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/todosAnt" component={Listings} />
      <Route exact path="/todosBS" component={Ant} />
    </div>
  );
}

export default App;
