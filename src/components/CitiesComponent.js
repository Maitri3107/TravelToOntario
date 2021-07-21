import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: null
        }
    }

    onPlaceSelect(place) {
      this.setState({selectedPlace: place});
    }

    renderPlace(place) {
      if (place != null) {
        return(
          <Card>
            <CardImg width="100%" src={place.image} alt={place.name} />
            <CardBody>
              <CardTitle>{place.name}</CardTitle>
              <CardText>{place.description}</CardText>
            </CardBody>
          </Card>
        );

      }
      else 
      {
        return(
          <div></div>
        );
      }
    }


    render() {
        const cities = this.props.places.map((place) => {
            return (
              <div key={place.id} className="col-12 col-md-5 mt-1">
                <Card onClick={() => this.onPlaceSelect(place)}>
                    <CardImg width="100%" src={place.image} alt={place.name} />
                  <CardImgOverlay >
                    <CardTitle>{place.name}</CardTitle>
                  </CardImgOverlay>
                  </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              
                  {cities}
              
            </div>
            <div className="row">
              {this.renderPlace(this.state.selectedPlace)}
            </div>
          </div>
        );
    }
}

export default Cities;