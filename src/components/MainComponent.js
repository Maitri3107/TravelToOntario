import React, { Component } from 'react';
import Home from './HomeComponent';
import Cities from './CitiesComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import PlaceDetail from './PlacedetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchPlaces, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const mapStateToProps = state => {
  return {
    places: state.places,
    Comments: state.Comments,
    promotions: state.promotions,
    leaders: state.leaders,
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (placeId, rating, author, comment) => dispatch(postComment(placeId, rating, author, comment)),
  fetchPlaces: () => {(fetchPlaces())(dispatch) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  postFeedback: (feedback) => {dispatch(postFeedback(feedback))}
});

class Main extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPlaces();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders()

  }

  render() {
    const HomePage = () => {
      console.log (this.props)
      return (
        <Home
          place={this.props.places.places.filter((place) => place.featured)[0]}
          placesLoading={this.props.places.isLoading}
          placesErrMess={this.props.places.errMess}
          promotion={this.props.promotions.Promotions.filter((promotions) => promotions.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader = {this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading = {this.props.leaders.isLoading}
          leadersFailed = {this.props.leaders.error}
        />
      );
    }

    const PlaceWithId = ({ match }) => {
      console.log (this.props)
      if (this.props.Comments.Comments){

      return (
        <PlaceDetail
          place={this.props.places.places.filter((place) => place.id === parseInt(match.params.placeId, 10))[0]}
          isLoading={this.props.places.isLoading}
          errMess={this.props.places.errMess}
          comments={this.props.Comments.Comments.filter((comment) => comment.placeId === parseInt(match.params.placeId, 10))}
          commentsErrMess={this.props.Comments.errMess}
          postComment={this.props.postComment}

        />
        ) }
        else {
          return (" ")
        }
    }

    return (
      <div className="App">
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch location={this.props.location}>
              <Route path="/home" component={HomePage} />
              <Route exact path="/cities" component={() => <Cities places={this.props.places} />} />
              <Route path="/cities/:placeId" component={PlaceWithId} />
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
              <Route exact path="/contactus" component={() => <Contact postFeedback = {this.props.postFeedback} resetFeedbackForm = {this.props.resetFeedbackForm} /> } />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

