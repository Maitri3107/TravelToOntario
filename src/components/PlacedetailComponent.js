import React from 'react'
 import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'


 
	function RenderPlace({place}) {
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
					   
				function RenderComments({comments}) {
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
		   
				const PlaceDetail = (props) => {
					const place = props.selectedPlace
					if(place === null || place === undefined) return (<div></div>)
		   
					return (
						<div className ='container' >
							<div className = 'row'>
							<RenderPlace place = {place} />
								<div className = 'col-12 col-md-5 m-1'>
								<h4>Comments</h4>
							<RenderComments comments = {place.comments}	/>		
 					</div>
 				</div>
 			</div>
 		)
 	}
 


 export default PlaceDetail  