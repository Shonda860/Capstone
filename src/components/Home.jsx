import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
 
  render() { 
    return ( 
      
      <section className="section section-icons center" >
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel grey">
                <i className= "material-icons large red-text">beenhere</i>
                <h4 className= "black-text">Judge Mode</h4>
                <p className= "black-text">Rank the attrubites such as Word Play, Delivery, Punchlines & etc</p>
              </div>
            </div> <div className="col s12 m4">
              <div className="card-panel grey">
                <i className= "material-icons large red-text">tag_faces</i>
                <h4 className= "black-text">Fan Mode</h4>
                <p className= "black-text">In fan mode you can vote based on mood and feel of bars</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel grey">
                <i className= "material-icons large red-text">text_format</i>
                <h4 className= "black-text">Dictionary</h4>
                <p className= "black-text">Look it up battle rap terminlogy using the search bar</p>
              </div>
            </div>
          </div>
        </div>
   
      </section> 
      );
  }
}
 
export default Home;