import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
class Signin extends Component {
  responseGoogle = (response) =>{
    console.log(response)
    console.log(response.profileObj)
  }
  render() { 
    return (
      <div>
        <GoogleLogin
          clientId= "504143617099-2daum5eaqdjm7dphi198rrv62et7u75l.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}/>
      </div>  );
  }
}
 
export default Signin;