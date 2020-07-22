import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {Box, Typography,Grid,  } from '@material-ui/core';
import Typed from "react-typed";
import "./AboutBattle.css"
import './Nav.css';
import  logo from "./img/logo.png"
import Particles from "react-particles-js"
// CSS Styles 
const useStyles = makeStyles(theme=>({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(15),
  },
  title: {
    color:"white"
  },
  subtitle:{
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  },
  particlesCava: {
    position: "absolute",
    
  }
}));
const Landing = () => {
  const classes = useStyles();
  return (
    
     <Box className="blacked tall">
     <Particles canvasClassName={classes.particlesCava}
      params={{
        particles: {
          number:{
            value:50,
            density:{
              enable:true,
              value_area:900
            }
          },
        shape:{
          type: "lines",
          stroke: {
            width: 4,
            color: "tomato"
          }, 
          size:{
            value: 8,
            rndom: true,
            anim:{
              enable:true,
              speed: 10,
              size_min: 0.1,
              snyc: true
            }
          }
        }
        }
      }}/>
     <Box className={classes.typedContainer}>  
     <Grid container justify="center"> 
      <img  src={logo} alt="logo"/>
      </Grid>
      <Typography className={classes.title} variant="h4">
          <Typed strings={["Welcome!"]} typeSpeed={40}/>
      </Typography>
      <br/>
      <Typography className={classes.subtitle} variant="h5">
        <Typed 
          strings={["Battle is a Art", "Enjoy, but please understand its just entertainment"]}
          typeSpeed={40}
          backSpeed={60}
          loop/>
      </Typography>
      <a href="/" className="btn-floating btn-large pulse deep-orange"><i className="large material-icons" >home</i></a>
    </Box>
    </Box>
  );
};

export default Landing;