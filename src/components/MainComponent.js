import React, { Component } from 'react';
import Home from './HomeComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Cities from './CitiesComponent';
import PlaceDetail from './PlacedetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { PLACES } from '../Shared/places';
import {Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: PLACES,
    };
  }


  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }
  return (
    <div className="App">
     <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/cities" component={() => <Cities places={this.state.places} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
}

export default Main;

