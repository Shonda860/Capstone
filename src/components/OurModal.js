import React, { Component } from 'react';

class OurModal extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
    });
  
  }
  render() { 
    return ( 
      <div>
        <a class="waves-effect waves-light btn modal-trigger deep-orange" href="#modal1">Click for More Info on Voting</a>
      <div id="modal1" class="modal">
        <div className="modal-content black-text" style={{width: '200px', height: '400'}}>
          <h4>Mode and Leagues</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Got it!</a>
        </div>
      </div>
      </div> );
  }
}
 
export default OurModal;