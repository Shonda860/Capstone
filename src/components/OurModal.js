import React, { Component } from 'react';
import "./OurModal.css"
class OurModal extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
    });
     
  }
    
  render() {
    let lit = String.fromCodePoint(0x1F525);
    let wack = String.fromCodePoint(0x1F636)
    return ( 
      <div>
        <a class="waves-effect waves-light btn modal-trigger deep-orange" href="#modal1">Click for More Info on Voting</a>
      <div id="modal1" class="modal">
        <div className="modal-content black-text modal_text" >
          <h3>Modes</h3>
          <span><p>Fan Mode: in fan mode as a user you are just watching casually. If you feeling it let us know based off the coresponding emoji. Was the bar Lit {lit} or Wack {wack} or something in between</p></span>
          <span><p>Judge Mode: in fan mode you are scoring based on techinally rate the lyricism, delivery, wittyness and more. </p></span>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Got it!</a>
        </div>
      </div>
      </div> );
  }
}
 
export default OurModal;