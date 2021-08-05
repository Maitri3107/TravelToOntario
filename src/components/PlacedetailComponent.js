import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderPlace({ place }) {
	if(place != null){
	return (
		<div className='col-12 col-md-5 m-1'>
			<Card>
				<CardImg width="100%" src={place.image} alt={place.name} />
				<CardBody>
					<CardTitle>{place.name}</CardTitle>
					<CardText>{place.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
	}
}

function RenderComments({ comments }) {
	if (comments != null) {
		return (
			<div className='col-12 col-md-5 m-1'>
				{
					comments.map((comment, i) => {
						return (
							<ul className='list-unstyled' key={comment.id}>
								<li>
									<div>{comment.comment}</div>
									<div>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}`}</div>
								</li>
							</ul>
						)
					})
				}
			</div>

		)
	}
}

const PlaceDetail = (props) => {
	const place = props.place
	const comments = props.comments
	if (place === null || place === undefined) return (<div></div>)

	return (
		<div className='container' >
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/home'>Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<Link to='/cities'>Cities</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>
						{place.name}
					</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className='container'>
				<div className='row'>
					<RenderPlace place = {place} />
					<RenderComments comments = {comments} />
				</div>
			</div>
		</div>
	)
}



export default PlaceDetail