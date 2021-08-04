import React, { Component } from 'react'
 import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

 class PlaceDetail extends Component {
 	render() {
 		const place = this.props.selectedPlace
 		if(place === null || place === undefined) return (<div></div>)

 		return (
 			<div>
 				<div className = 'row'>
 					<div className = 'col-12 col-md-5 m-1'>
 						<Card>
 							<CardImg width="100%" src={place.image} alt={place.name}/>
 							<CardBody>
 								<CardTitle>{place.name}</CardTitle>
 								<CardText>{place.description}</CardText>
 							</CardBody>
 						</Card>
 					</div>
 					<div className = 'col-12 col-md-5 m-1'>
 					<h4>Comments</h4>
 						{place.comments.map((comment, i) => {
 							return (
 								<div key = {comment.id}>
 									<p>{comment.comment}</p>
 									<p>{`-- ${comment.author} , ${comment.date}`}</p>
 								</div>
 							)
 						})}			
 					</div>
 				</div>
 			</div>
 		)
 	}
 }

 export default PlaceDetail  