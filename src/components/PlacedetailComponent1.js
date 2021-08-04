import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, 
		 CardText, CardBody, CardTitle, 
		 Breadcrumb, BreadcrumbItem, Button,
		 Modal, ModalHeader, ModalBody, ModalFooter,
		 Row, Col, Label
	   } from 'reactstrap'
//import { Link } from 'react-router-dom'
//import { LocalForm, Control, Errors } from 'react-redux-form'
//import { Loading } from './LoadingComponent'
//import { baseUrl } from '../shared/baseUrl'
//import { FadeTransform, Fade, Stagger } from 'react-animation-components'

function RenderPlace({place}) {
		if(place != null){
			return (
					<div className = 'col-12 col-md-5 m-1'>
											
							<Card>
								<CardImg width="100%"  alt={place.name}/>
								<CardBody>
									<CardTitle>{place.name}</CardTitle>
									<CardText>{place.description}</CardText>
								</CardBody>
							</Card>
						
					</div>
			)
		}
	}


	function RenderComments({comments, postComment, placeId}) {
		if(comments!= null){
			return (
				<div className = 'col-12 col-md-5 m-1'>
								
					{
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
					}
			
				<CommentForm placeId = {placeId} postComment = {postComment}/>
				</div>
		
			)
		}
	}



const PlaceDetail = (props) => {
		 if(props.dish != null)
		return (
			<div className ='container' >
				<div className = 'row'>
					<Breadcrumb>
						<BreadcrumbItem>
							Home
						</BreadcrumbItem>
						<BreadcrumbItem>
							Cities
						</BreadcrumbItem>						
						<BreadcrumbItem active>
							{props.place.name}
						</BreadcrumbItem>
					</Breadcrumb>
			    </div>
			    <div className = 'container'>
			    	<div className = 'row'>
						<RenderPlace place = {props.place} />
						<RenderComments 
							comments = {props.comments}
							postComment = {props.postComment}
							placeId = {props.place.id}
						/>			    	
			    	</div>
				</div>
			</div>
		)
	}


const minLength = (min) => (val) => val && val.length >= min 
const maxLength = (max) => (val) => !val || val.length < max
const required = (val) => val && val.length

class CommentForm extends Component {
	
	constructor (props) {
		super (props)
		this.state = {
			isModalOpen: false
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.handlepostComment = this.handlepostComment.bind(this)
	}

	toggleModal () {
		this.setState ({
			isModalOpen: !this.state.isModalOpen
		})
	}

	handlepostComment (values) {
		this.toggleModal()
		this.props.postComment(parseInt(this.props.placeId), values.rating, values.name, values.comment)
	}

	
}


export default PlaceDetail