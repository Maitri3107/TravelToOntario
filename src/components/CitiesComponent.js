import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../Shared/baseUrl';


function RenderCitiesItem({ place, onClick }) {
  return (
    <Card>
      <Link to={`/cities/${place.id}`} >
        <CardImg width="100%" src={baseUrl + place.image} alt={place.name} />
        <CardImgOverlay>
          <CardTitle>{place.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Cities = (props) => {
  const places = props.places
  const cities = props.places.places.map((place) => {
    return (
      <div key={place.id} className='col-12 col-md-5 m-1'>
        <RenderCitiesItem place={place} />
      </div>
    );
  });

  if (props.places.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.places.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.places.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  else

    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home' >Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Cities</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Cities</h3>
            <hr />
          </div>
        </div>

        <div className='row'>
          {cities}
        </div>
      </div>
    )
}



export default Cities;