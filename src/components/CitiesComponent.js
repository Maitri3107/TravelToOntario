import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

function RenderCitiesItem({ place, onClick}) {
  return (
            <Card onClick = {()=> onClick(place.id)}>
						<CardImg width="100%" src={place.image} alt={place.name}/>
						<CardImgOverlay>
							<CardTitle>{place.name}</CardTitle>
						</CardImgOverlay>
						
					</Card>
  );
}
const Cities = (props) => {

  const cities = props.places.map((place) => {
    return (
      <div key = {place.id} className = 'col-12 col-md-5 m-1'>
        <RenderCitiesItem place={place} onClick={props.onClick} />
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
  


export default Cities;