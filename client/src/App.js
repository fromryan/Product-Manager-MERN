import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main'
import Detail from './views/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
