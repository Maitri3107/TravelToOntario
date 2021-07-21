import React, { Component, component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Cities from './components/CitiesComponent';
import './App.css';
import { PLACES } from './Shared/places';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: PLACES
    };
  }
  render() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Travel To Ontario</NavbarBrand>
        </div>
      </Navbar>
      <Cities places={this.state.places} />
    </div>
  );
}
}

export default App;

