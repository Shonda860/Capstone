import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OurModal from './OurModal'

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState('Fan Mode');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    props.setMode(event.target.value)
  console.log(event.target.value)
  }; 
  const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '700px', height: '600px' },
};

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

  return (
    <Box display="flex" style={{marginLeft: "40px", marginTop: "100px"}} >
     <Box className="black" borderRadius={16} {...defaultProps} ><div style={{marginLeft: "60px", marginTop: "70px"}}><h4 className="red-text">Please Select a League from Above</h4><h5 style={{marginTop: "40px"}}>You have selected: <span className="red-text">{value}</span> </h5>
    <FormControl component="fieldset" >
      <FormLabel component="legend" className="white-text"></FormLabel>
      <RadioGroup aria-label="mode"  className="white-text" name="mode1" name="customized-radios" value={value} onChange={handleChange}  style={{marginTop: "20px"}}>
        <div style={{marginBottom: "40px"}}><FormControlLabel  value="Fan Mode" control={<Radio className= "white-text"/>} label="Fan Mode" /><p>In Fan Mode you are watching from a purely entertainment stand point; give points based on entertainment factors</p>
        <FormControlLabel value="Judge Mode" control={<Radio className= "white-text"/>} label="Judge Mode" /><p>In Judge Mode attention to detail is key; give points based on skill</p></div>
     
      </RadioGroup> 
      
    </FormControl>
  
    </div>  
     <OurModal/>
    </Box> 
  </Box>
  );
}
