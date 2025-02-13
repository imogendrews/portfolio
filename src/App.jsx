// App.js
import React from 'react';
import { Home } from './pages/Home'; // Adjust the path if needed
import './App.css';  // This imports your CSS file
import { ItemPage } from './pages/ItemPage';  // The new component you created
import { Route, Switch } from 'wouter';


const App = () => {
  return (
    <div>
    {/* Define your routes here */}
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/item/:id" component={ItemPage} />
    </Switch>
  </div>
  );
};

export default App;
