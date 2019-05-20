import React, { Component } from "react";

import "./PhoneBookCSS.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "PHONE BOOK",
      act: 0,
      AllData: []
    };

  } 
  componentDidMount() {
    this.refs.name.focus();
  }

  // handleling on submition
  fsubmit = e => {
    e.preventDefault();
    console.log("try");
    let AllData = this.state.AllData;
    let name = this.refs.name.value;
    let phoneBook = this.refs.phoneBook.value;
    
    // setting items to local storage
    if (this.state.act === 0) {
      let data = {
        name,
        phoneBook
      };
      AllData.push(data);
      localStorage.setItem('AllData', JSON.stringify(AllData));
    } else {

      let index = this.state.index;

       AllData[index].name = name;
       AllData[index].phoneBook = phoneBook;
    }

    // setting the state
    const loadItems = () => {
   
      this.setState({ [AllData]: value });
    } 

    const value = JSON.parse(localStorage.getItem('AllData'));

    this.setState({
      AllData: value,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };
  
  // handle delete
  fDelete = i => {
    let AllData = this.state.AllData;
    AllData.splice(i, 1);
    this.setState({
      AllData: AllData
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  // handle edit
  fEdit = i => {
    let data = this.state.AllData[i];
    this.refs.name.value = data.name;
    this.refs.phoneBook.value = data.phoneBook;
    this.setState({
      act: i,
      index: i
    });
    this.refs.name.focus();
  };

  render() {
    let {AllData} = this.state.AllData;
   
    
    return (
      <div className="App">
        <div >
          <h2> {this.state.title} </h2>

          {/* render saved contacts */}
          <div className="saved-contacts" >
            <h3> SAVED CONTACTS</h3>

            {this.state.AllData.map((data, i) => (
              <li key={i} className="myList">
                {i + 1}. {data.name}, {data.phoneBook}
                <button
                  onClick={() => this.fEdit(i)}
                  className="myListButton  myButton-warning myButton-sm m-2"
                >
                  {" "}
                  Edit{" "}
                </button>
                <button
                  onClick={() => this.fDelete(i)}
                  className="myListButton  myButton-warning myButton-sm m-2"
                >
                  {" "}
                  Delete{" "}
                </button>
              </li>
            ))}
			
          </div>

          {/* render form to save the contacts */}
          <div className="form-container" >
		  
            <form ref="myForm" className="myForm">
			
              <h3> Name:</h3>

              <input
                type="text"
                ref="name"
                placeholder="Type full name"
                className="formField"
                required
              />
              <h3> Contact:</h3>
              <input
                type="number"
                ref="phoneBook"
                placeholder="Type contact"
                className="formField"
                required
              />
              <button
                onClick={e => this.fsubmit(e)}
                className="myButton  myButton-warning myButton-sm m-2"
              >
                {" "}
                SAVE{" "}
              </button>

            </form>
        
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
