import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Cities extends Component {
  constructor (props) {
    super(props)
    
  }
  

  renderPlace(place) {
    if (place == null) return (<div></div>)
    return (
      <Card>
        <CardImg width="100%" src={place.image} alt={place.name}/>
        <CardBody>
          <CardTitle>{place.name}</CardTitle>
          <CardText>{place.description}</CardText>
        </CardBody>
      </Card>
    )
  }

  render() {
    const places = this.props.places
    const cities = places.map((place) => {
      return (
        <div key = {place.id} className = 'col-12 col-md-5 m-1'>
          <Card onClick = {() => this.props.onClick(place.id)}>
            <CardImg width="100%" src={place.image} alt={place.name}/>
            <CardImgOverlay>
              <CardTitle>{place.name}</CardTitle>
            </CardImgOverlay>

          </Card>
        </div>
      )
    })

    return (
      <div className = 'container'>
        <div className = 'row'>
          {cities}
        </div>
      </div>
    )
  }
}
export default Cities;