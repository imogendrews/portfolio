// App.js
import React from 'react';
import { Home } from './pages/Home'; // Adjust the path if needed
import './App.css';  // This imports your CSS file
import { ItemPage } from './pages/ItemPage';  // The new component you created
import { Route, Switch } from 'wouter';
import { Test } from './pages/Test'
import Dropdown from 'react-bootstrap/Dropdown';



const App = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}> {/* Wrapper to manage layout */}

      {/* Dropdown button positioned at the top-right corner */}
      {/* <Dropdown
        style={{
          position: 'absolute', // Position relative to parent div
          top: '20px', // 20px from top
          right: '20px', // 20px from right
          zIndex: 1000,  // Ensure it stays above the sky
        }}
      >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

      {/* Sky / Canvas component */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Switch>
          <Route path="/" component={Test} />
          <Route path="/item/:id" component={ItemPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;