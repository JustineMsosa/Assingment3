import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import vip1 from "../images/fm1.png";
import vip2 from "../images/fm5.png";
import vip3 from "../images/fm3.png";
import vip4 from "../images/man.png";

class VIPC extends Component {
    constructor(props){
        super(props);
        this.state = {
            ApplicantList: [
                {
                    id: 1,
                    name: "Chanco Registra ",
                     Number: "018399383 ",
                    urlImage: vip1
                },
                {
                    id: 2,
                    name: "Police ",
                   Number: "997 ",
                    urlImage: vip2
                    
                },
                {
                    id: 3,
                    name: "Fire EXtinguisher Team",
                   Number: "0188383838383 ",
                    urlImage: vip3
                   
                },
                {
                    id: 4,
                    name: "Justine Msosa ",
                   Number: "0888667535",
                    urlImage: vip4
                    
                }
            ]
        }
    }
    render() {
        
       return(
            <div>
                {
                    this.state.ApplicantList.map((wanted, index) => {
                     return (
                        <Media key = {wanted.id} >
                        <Media.Body >
                            <h5 >NAME: {wanted.name}</h5>
                            <h5>PHONE NUMBER: {wanted.Number}</h5>
                        </Media.Body>
                        <img
                            width={100}
                            height={100}
                    
                            src={wanted.urlImage}
                        
                        />                        
                        </Media>                       
                     )
                    })
                }
            </div>
        )
    }
}
export default VIPC;