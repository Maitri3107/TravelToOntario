import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Cities from './CitiesComponent';
import PlaceDetail from './PlacedetailComponent';
import { PLACES } from '../Shared/places';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: PLACES,
      selectedPlace: null
    };
  }

  onPlaceSelect(placeId) {
    this.setState({selectedPlace: placeId});
  }

  render() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Travel To Ontario</NavbarBrand>
        </div>
      </Navbar>
      <Cities places={this.state.places} onClick={(placeId) => this.onPlaceSelect(placeId)} />
      <PlaceDetail
        selectedPlace={this.state.places.filter((place) => place.id === this.state.selectedPlace)[0]} />
    </div>
  );
}
}

export default Main;

