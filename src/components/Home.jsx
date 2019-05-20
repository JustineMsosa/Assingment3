import React, {Component} from 'react';
import Lookandfill from './Lookandfill';
 
class Home extends Component{
    render(){
        return(
				//  divig the page into 3
			  <div className="row">
			    <div className="col-3">
					<h3> Back up your contact with us!!! </h3> <br /> <br />
					<h3>By a single click you can backup your contacts</h3>
				</div>
				<div className="col-6">
				<Lookandfill />
				</div>
				<div className="col-3">
					<h3>Dont be afraid of loosing contacts here is the solution</h3>
					<br /> <br />
					<h3>Easy to use</h3>
				</div>			  
             </div>
        );
    }
}
export default Home;
