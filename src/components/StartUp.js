import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Counters from "./Counters";

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState('Fan Mode');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setMode(event.target.value)
  }; 
  const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '500px', height: '500px' },
};
 
  return (
    <Box display="flex">
     <Box className="black" borderRadius={16} {...defaultProps} ><div style={{marginLeft: "25px"}}><h3>Please Select a Voting mode:</h3><p>You have selected:{value}</p>
    <FormControl component="fieldset" >
      <FormLabel component="legend" className="white-text"></FormLabel>
      <RadioGroup aria-label="gender" className="white-text" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Fan Mode" control={<Radio />} label="Fan Mode" /><p>In Fan watch you are watching from a purely entertainment vaule</p>
        <FormControlLabel value="Judge Mode" control={<Radio />} label="Judge Mode" /><p>In Judge Mode Attention to detail is key give points based on skill</p>
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
    </div>
    </Box>
  </Box>
  );
}
// import React from 'react';
// import Box from '@material-ui/core/Box';

// const defaultProps = {
//   bgcolor: 'background.paper',
//   borderColor: 'text.primary',
//   m: 1,
//   border: 1,
//   style: { width: '500px', height: '500px' },
// };

// export default function BorderRadius() {
//   return (
//     <Box display="flex" justifyContent="center">
//       <Box className="black" borderRadius={16} {...defaultProps} >
//     </Box>
//     </Box>
//   );
// }
