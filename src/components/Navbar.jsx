import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";
class Navbar extends Component {

    render() {

    return(
     <div>
         {/* using navbar to link to many pages */}
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5"> 
            <Link to="/">
                <img src={logo} art="store"
                className="navbar-brand" />
            </Link>
            <ul className="navbar-nav aling-item-center">
            <li className="nav-ittem ml-5">
            <Link to="/" className="nav-link" > 
            Home
            </Link> </li>
            </ul>
            <Link to="/VipContacts" className="ml-auto" >
            <button className="btn">
                <i className="fas fa-cart-plus" /> VIP Contacts
            </button>
             </Link>
             <Link to="/details" className="ml-auto" >
            <button className="btn">
                <i className="fas fa-cart-plus" /> All Contacts
            </button>
             </Link>
             <Link to="/contacts" className="ml-auto" >
            <button className="btn">
                <i className="fas fa-cart-plus" /> Add Contacts
            </button>
             </Link>
             
          </nav>
     </div>
    )
    }  
} 
export default Navbar;