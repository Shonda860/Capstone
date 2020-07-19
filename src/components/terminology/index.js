// import React, { Fragment } from 'react'
// import { Grid, Paper, Typography, List } from "@material-ui/core";
// import { ListItem, ListItemText } from 'material-ui/List'
// import RightPane from './RightPane';
// import LeftPane from './LeftPane';
// import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// export default props =>
//     <MuiThemeProvider>
//       <Grid container >
//         <Grid item sm>
//          <LeftPane/>
//           </Grid>
//           <Grid item sm>
//           <RightPane/>
//         </Grid>
//       </Grid>
//       </MuiThemeProvider>

// import React, { Fragment } from 'react'
// import { Grid, Paper, Typography, List } from "@material-ui/core"
// import { ListItem, ListItemText } from 'material-ui/List'

// const styles = {
//   Paper: {
//     padding: 20,
//     marginTop: 10,
//     marginBottom: 10,
//     height: 500,
//     overflowY: 'auto'
//   }
// }

// export default ({
//   exercises,
//   category,
//   onSelect,
//   exercise: {
//     id,
//     title = 'Welcome!',
//     description = 'Please select an exercise from the list on the left.'
//   }
//  }) =>
//   <Grid container>
//     <Grid item sm>
//       <Paper style={styles.Paper}>
//         {exercises.map(([group, exercises]) =>
//           !category || category === group
//             ? <Fragment key={group}>
//                 <Typography
//                   variant="headline"
//                   style={{ textTransform: 'capitalize' }}
//                 >
//                   {group}
//                 </Typography>
//                 <List component="ul">
//                   {exercises.map(({ id, title }) =>
//                     <ListItem
//                       key={id}
//                       button
//                       onClick={() => onSelect(id)}
//                     >
//                       <ListItemText primary={title} />
//                     </ListItem>
//                   )}
//                 </List>
//               </Fragment>
//             : null
//         )}
//       </Paper>
//     </Grid>
//     <Grid item sm>
//       <Paper style={styles.Paper}>
//         <Typography
//           variant="display1"
//         >
//           {title}
//         </Typography>
//         <Typography
//           variant="subheading"
//           style={{marginTop: 20}}
//         >
//           {description}
//         </Typography>
//       </Paper>
//     </Grid>
//   </Grid>
// import React from 'react';
// import { Grid} from "@material-ui/core";
// import LeftPane from './LeftPane';
// import RightPane from './RightPane';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// export default ({exercises}) =>
//     <MuiThemeProvider>
//       <Grid container >
//         <Grid item sm>
//          {exercises.map(([group,exercises])=>
//          <h1>{group}</h1>)}
//           </Grid>
//           <Grid item sm>
//           <RightPane/>
//         </Grid>
//       </Grid>
//       </MuiThemeProvider> 
//   // <div>
//   //   Hello from Exercises
//   // </div>
//     // return (
//     //  