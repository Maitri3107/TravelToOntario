import React, { Component } from 'react';
 import logo from './logo.svg';
 import { Navbar, NavbarBrand } from 'reactstrap'
 import Menu from './components/CitiesComponent'
 import { PLACES } from './Shared/places'

 class App extends Component {

   constructor(props) {
     super(props)

     this.state = {
       places: PLACES
     }
   }

   render() {
     return (
       <div className="App">
         <Navbar dark color='primary'>
           <div className = 'container'>
             <NavbarBrand href='/'> Test </NavbarBrand>
           </div>
         </Navbar>
         <Menu places = { this.state.places }/>
       </div>
     );
   }
 }

 export default App;