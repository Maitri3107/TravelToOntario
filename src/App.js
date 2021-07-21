import React, { Component, component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Travel To Ontario</NavbarBrand>
        </div>
      </Navbar>
      
    </div>
  );
}
}

export default App;

