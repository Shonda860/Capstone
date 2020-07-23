import React, { useState } from 'react';
import GoogleLogin from 'react-google-login'

export default (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");


  const responseGoogle = response =>{
    setName(response.profileObj.name)
    props.usernameCallback(response.profileObj.name)
    setEmail(response.profileObj.email)
    setUrl(response.profileObj.imageUrl)
    console.log(response)
    console.log(response.profileObj)
  };

  
   
    return (
      <>
      <div>  
        <GoogleLogin
          clientId= "828967388873-4642pa3c1j01k6so78uf8m3d0odut7bt.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}/>
      </div>   
      <ul id="slide-out" class="sidenav">
      <li><div class="user-view">
        <div className="background">
        
        </div>
        <a href="#user"><img className="circle" src={url} alt={name}/></a>
        <a href="#name"><span className=" black-text name"> {name}</span></a>
        <a href="#email"><span className=" black-text email">{email}</span></a>
      </div></li>
      <li><a href="#!"><i className="material-icons">assignment_ind</i>Signed in  {name} </a></li>
      <li><a href="#!">Vote History</a></li>
      <li><div className="divider"></div></li>
      <li><a href="#!" className="subheader">Favorite Battles</a></li>
      <li><a href="#!" className="waves-effect" href="#!">Battle Name#1</a></li>
      <li><a className="waves-effect" href="#!">Battle Name#2</a></li>
    </ul>
    </>
  );
}


