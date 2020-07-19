import React from 'react'
import {Paper, Tabs,Tab} from '@material-ui/core'

import OurModal from "../OurModal";

export default ({muscles,category, onSelect}) => {
  const index = category
  ? muscles.findIndex(group => group === category) + 1
  : 0

const onIndexSelect = (e, index) =>
  onSelect(index === 0 ? '' : muscles[index - 1])

return(
  <Paper elevation={6} style={{ padding: "15px" }}>
    <Tabs
      value={0}
      // onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    > 
    <Tab label="ALL"/>
    {muscles.map(group =>
      <Tab label={group}/>)}
   </Tabs>
  </Paper>
  )
}


// import React from 'react'
// import { Paper, Tabs } from 'material-ui'
// import { Tab } from 'material-ui/Tabs'

// export default ({ muscles, category, onSelect }) => {
//   const index = category
//     ? muscles.findIndex(group => group === category) + 1
//     : 0

//   const onIndexSelect = (e, index) =>
//     onSelect(index === 0 ? '' : muscles[index - 1])

//   return <Paper>
//     <Tabs
//       value={index}
//       onChange={onIndexSelect}
//       indicatorColor="primary"
//       textColor="primary"
//       centered
//     >
//       <Tab label="All" />
//       {muscles && muscles.map(group =>
//         <Tab key={group} label={group} />
//       )}
//     </Tabs>
//   </Paper>
// }


// // import React from 'react'
// // import {Paper, Tabs,Tab} from '@material-ui/core'

// // import OurModal from "./OurModal";

// // export default props =>
// //   <Paper elevation={6} style={{ padding: "15px" }}>
// //     <Tabs
// //       value={0}
// //       // onChange={handleChange}
// //       indicatorColor="primary"
// //       textColor="primary"
// //       centered
// //     >
// //       <Tab label="Item One" />
// //       <Tab label="Item Two" />
// //       <Tab label="Item Three" />
// //     </Tabs>
// //   </Paper>