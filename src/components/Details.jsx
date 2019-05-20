import React, { Component } from "react";
import "./PhoneBookCSS.css";
import ShowContacts from "./ShowContacts"

class Details extends Component {
  
  render() {
     return (
      <div className="App">  
			    <ShowContacts />
      </div>
    );
  }
}

export default Details;