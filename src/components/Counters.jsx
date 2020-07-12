import React, { Component } from 'react';
import Counter from "./Counter";
import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap/';
// import 'bootstrap/dist/css/bootstrap.min.css';
class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 0 },
      {id: 2, value: 0 },
      {id: 3, value: 0 },
      {id: 4, value: 0 },
      {id: 5, value: 0 }
    ]
   };

  render() { 
    return ( 
      <div>
        { this.state.counters.map(counter => <Counter key={counter.id} value={counter.value}/>)}
      </div>
    );
  }
}
 
export default Counters;