import React, { Component } from 'react';
import Home from './HomeComponent';
import Cities from './CitiesComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import PlaceDetail from './PlacedetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      places: state.places,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
    }
}

class Main extends Component {
  constructor(props) {
    super(props);

  }
 
  render() {
    const HomePage = () => {
      return(
        <Home place={this.props.places.filter((place) => place.featured)[0]}
        promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
         />
      );
    }

    const PlaceWithId = ({match}) => {
      return(
        <PlaceDetail 
          place = {this.props.places.filter((place) => place.id === parseInt(match.params.placeId))[0]} 
          comments = {this.props.comments.filter((comment) => comment.placeId === parseInt(match.params.placeId))}
        />
      )
    }
    
  return (
    <div className="App">
     <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/cities" component={() => <Cities places={this.props.places} />} />
        <Route path="/cities/:placeId" component={PlaceWithId} />
        <Route exact path = "/aboutus" component = { () => <About leaders = {this.props.leaders} /> } />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));

