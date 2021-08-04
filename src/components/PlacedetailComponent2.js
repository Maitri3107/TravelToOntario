import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Cities from './CitiesComponent';
import { PLACES } from '../Shared/places';

class PlaceDetail extends Component {
  constructor(props) {
    super(props);

    
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

  export default PlaceDetail;