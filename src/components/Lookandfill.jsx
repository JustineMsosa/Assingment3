import React, { Component } from 'react';
import { Link } from "react-router";
import Carousel from 'react-bootstrap/Carousel';
import backup from "../images/backup.jpg";
import chair from "../images/image.jpg";
import Vacant from "../images/vacant.jpg";
import download from "../images/download.png";

class Lookandfill extends Component {
    state={
        products: []
    };

    render() {
        return(
            <div>
								{/* adding look and fill using corousel */}
                 <Carousel className="width-height">
			              <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={chair}
                        alt="chair"
                          />

                        <Carousel.Caption>
                            <h3>Back up your contacts with us</h3>
                            <p>Then You Let <span> <Link to="PhoneBook">Us</Link></span> Happy</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      
                      <Carousel.Item >
						<img
						className="d-block w-100"
						src={Vacant}
						alt="Vacant"
						/>

					  </Carousel.Item>
					  <Carousel.Item >
						<img
						className="d-block w-100"
						src={download}
						alt="download"
						/> 
						</Carousel.Item>
						
					 <Carousel.Item>
						<img
						className="d-block w-100"
						src={backup}
						alt="backup"
						/>
					</Carousel.Item>

				</Carousel>
				
            </div>
        )
    }
}
export default Lookandfill;