import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const cities = this.props.places.map((place) => {
            return (
              <div key={place.id} className="col-12 mt-5">
                <Media tag="li" >
                  <Media left middle>
                      <Media object src={place.image} alt={place.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{place.name}</Media>
                    <p>{place.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {cities}
              </Media>
            </div>
          </div>
        );
    }
}

export default Cities;