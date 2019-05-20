import React, { Component } from "react";
import "./PhoneBookCSS.css";

class ShowContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "PHONE BOOK",
      act: 0,
      AllData: []
    };

  } 

  // handleling submit
  fsubmit = e => {
    e.preventDefault();

    // set AllData to be the local storage AllData
    
	  this.state.AllData=JSON.parse(localStorage.getItem('AllData'));
    let AllData = this.state.AllData;
  
    const loadItems = () => {
   
      this.setState({ [AllData]: value });
  } 

   const value = JSON.parse(localStorage.getItem('AllData'));
    this.setState({
      AllData: value,
      act: 0
    });

  };
  
  // handleling delete
  fDelete = i => {
    let AllData = this.state.AllData;
    AllData.splice(i, 1);
    this.setState({
      AllData: AllData
    });
    };

  render() {
    let {AllData} = this.state.AllData;
   
    
    return (
      <div >
	  <header>
          {/* headerto show all contacts */}
          <nav class="d-flex navbar navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand" href="#">My Back up contacts</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ml-auto">
              <form onSubmit={this.handleSubmit} class="form-inline my-2 my-lg-0">
             
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={e => this.fsubmit(e)}>Show All</button>
              </form>
            </div>
          </nav>
       </header>
            
            {/* rendering contacts */}
            {this.state.AllData.map((data, i) => (
              <li key={i} className="myList">
                {i + 1}. Name: {data.name} <br />
				   Phone Number: {data.phoneBook}
                <button 
				  style={{background:'red'}}
                  onClick={() => this.fDelete(i)}
                  className="myListButton  myListButton-warning myListButton-sm m-2"
                >
                  {" "}
                  Delete{" "}
                </button>
              </li>
            ))}
			
      </div>
    );
  }
}
export default ShowContacts;
