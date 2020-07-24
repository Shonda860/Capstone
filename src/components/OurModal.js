import React, { Component } from 'react';
import M from "materialize-css";
import "./OurModal.css"
class OurModal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }
    
  render() {
    let lit = String.fromCodePoint(0x1F525);
    let wack = String.fromCodePoint(0x1F636)
    return ( 
      <>
      <button
        className="waves-effect waves-light btn modal-trigger deep-orange"
        data-target="modal1"
      >
        Click For More Info Voting
      </button>
      <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content black-text modal_text">
          <h3>Modes</h3>
          <span><p>Fan Mode: In fan mode just watching casually. If you're feeling it let us sknow based off the coresponding emoji. Was the bar Lit {lit} or Wack {wack} or something in between?</p></span>
          <span><p>Judge Mode: In judge mode you are scoring based on technicality. Rate the lyricism, delivery, wittiness and more. </p></span>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect  btn-flat">Got it!</a>
        </div>
      </div>
      </>
      );
  }
}
 
export default OurModal;