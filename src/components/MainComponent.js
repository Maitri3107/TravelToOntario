import React, { Component } from 'react';
import Home from './HomeComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Cities from './CitiesComponent';
import Contact from './ContactComponent';
import PlaceDetail from './PlacedetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { PLACES } from '../Shared/places';
import { COMMENTS } from '../Shared/comments';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';
import {Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: PLACES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  render() {

    const HomePage = () => {
      return(
        <Home place={this.state.places.filter((place) => place.featured)[0]}
        promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
         />
      );
    }
  return (
    <div className="App">
     <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/cities" component={() => <Cities places={this.state.places} />} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
}

export default Main;

