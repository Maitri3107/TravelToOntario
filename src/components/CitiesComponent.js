import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';


class Cities extends Component {

  render() {
    const places = this.props.places
    const cities = places.map((place) => {
      return (
				<div key = {place.id} className = 'col-12 col-md-5 m-1'>
					<Card onClick = {()=> this.props.onClick(place.id)}>
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