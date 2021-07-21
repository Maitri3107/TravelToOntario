import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [
                {
                  id: 0,
                  name:'Nathan Phillips Square',
                  image: '../../assets/images/Nathan_Phillips.jpg',
                  category: 'toronto',
                  description: 'Nathan Phillips Square is an urban plaza in Toronto, Ontario, Canada. It forms the forecourt to Toronto City Hall, or New City Hall, at the intersection of Queen Street West and Bay Street, and is named for Nathan Phillips, mayor of Toronto from 1955 to 1962.'   },
               {
                  id: 1,
                  name:'Toronto Skyline',
                  image: '../../assets/images/Toronto_Skyline.jpg',
                  category: 'toronto',
                  label:'',
                  description: 'Toronto currently has the 17th highest number of skyscrapers in the world, and with an impressive total of 524 towers and high-rises, only New York City, Hong Kong and Chicago boast more.'      }
                  
                   ],
        };
    }

    render() {
        const cities = this.state.places.map((place) => {
            return (
              <div key={place.id} className="col-12 mt-5">
                <Media tag="li">
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