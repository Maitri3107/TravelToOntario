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
import { postComment, fetchPlaces, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
    return {
      places: state.places,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
    }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (placeId, rating, author, comment) => dispatch(postComment(placeId, rating, author, comment)),
  fetchPlaces: () => { dispatch(fetchPlaces())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => { dispatch(fetchComments())},
  fetchPromos: () => { dispatch(fetchPromos())}
});

class Main extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPlaces();
    this.props.fetchComments();
    this.props.fetchPromos();

  }
 
  render() {
    const HomePage = () => {
      return(
        <Home 
        place={this.props.places.places.filter((place) => place.featured)[0]}
        placesLoading={this.props.places.isLoading}
        placesErrMess={this.props.places.errMess}
        promotion={this.props.promotions.promotions.filter((promos) => promos.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
         />
      );
    }

    const PlaceWithId = ({match}) => {
      return(
        <PlaceDetail 
        place = {this.props.places.places.filter((place) => place.id === parseInt(match.params.placeId,10))[0]}
        isLoading={this.props.places.isLoading}
        errMess={this.props.places.errMess}
        comments = {this.props.comments.comments.filter((comment) => comment.placeId === parseInt(match.params.placeId,10))}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        
        />
      )
    }
    
  return (
    <div className="App">
     <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/cities" component={() => <Cities places={this.props.places} />} />
        <Route path="/cities/:placeId" component = { PlaceWithId } />
        <Route exact path = "/aboutus" component = { () => <About leaders = {this.props.leaders} /> } />
        <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  )
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

