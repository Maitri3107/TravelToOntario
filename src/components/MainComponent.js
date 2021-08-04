import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Cities from './CitiesComponent';
import PlaceDetail from './PlacedetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { PLACES } from '../Shared/places';
import '../App.css';

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
     <Header />
      <Cities places={this.state.places} onClick={(placeId) => this.onPlaceSelect(placeId)} />
      <PlaceDetail
        selectedPlace={this.state.places.filter((place) => place.id === this.state.selectedPlace)[0]} />
      <Footer />
    </div>
  );
}
}

export default Main;

