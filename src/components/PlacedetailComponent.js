import React, { Component } from 'react'
 import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

 class PlaceDetail extends Component {
	
	renderPlace(place) {
		if(place != null){
			return (
					<div className = 'col-12 col-md-5 m-1'>
						<Card>
							<CardImg width="100%" src={place.image} alt={place.name}/>
 							<CardBody>
 								<CardTitle>{place.name}</CardTitle>
 								<CardText>{place.description}</CardText>
 							</CardBody>
 						</Card>
 					</div>
					 )
					}
				}
		   
				renderComments(comments) {
					if(comments!= null){
						return (
							comments.map((comment, i) => {
								return (
									<ul className ='list-unstyled' key = {comment.id}>
										<li>
											<div>{comment.comment}</div>
											<div>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}`}</div>
 										</li>
									</ul>
								)
							})		
						)
					}
				}
		   
				render() {
					const place = this.props.selectedPlace
					if(place == null || place == undefined) return (<div></div>)
		   
					return (
						<div className ='container' >
							<div className = 'row'>
								{this.renderPlace(place)}
								<div className = 'col-12 col-md-5 m-1'>
								<h4>Comments</h4>
								{this.renderComments(place.comments)}			
 					</div>
 				</div>
 			</div>
 		)
 	}
 }


 export default PlaceDetail  