import React from 'react'
import  {AppBar,Toolbar, Typography} from '@material-ui/core'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default props =>

<MuiThemeProvider>
  <AppBar position="static"  color="transparent" className="white-text">
    <Toolbar>
      <Typography variant="display 4">
        Battleraplogy Database
      </Typography>
    </Toolbar>
  </AppBar>
</MuiThemeProvider>

// import React from 'react';
// import Data from './data.json'

// function Battleraplogy() { 

//     return (
//      <div>
//        <div>
//         {Data.A.map(post => {
//             return (
//                 <div className="card">
//                     <h1>{post.word}</h1>
//                     <p>{post.def}</p>
//                 </div>
//             )
//         })}
//      </div> 
//      <div>
//         {Data.B.map(post => {
//             return (
//                 <div className="card">
//                     <h1>{post.word}</h1>
//                     <p>{post.def}</p>
//                 </div>
//             )
//         })}
//      </div> 
//      <div>
//         {Data.C.map(post => {
//             return (
//                 <div className="card">
//                     <h1>{post.word}:</h1>
//                     <p>{post.def}</p>
//                 </div>
//             )
//         })}
//      </div> 
//      <div>
//      {Data.D.map(post => {
//          return (
//              <div className="card">
//                  <h1>{post.word}:</h1>
//                  <p>{post.def}</p>
//              </div>
//          )
//      })}
//   </div> 
//   <div>
//   {Data.E.map(post => {
//       return (
//           <div className="card">
//               <h1>{post.word}:</h1>
//               <p>{post.def}</p>
//           </div>
//       )
//   })}
//   <div>
//   {Data.F.map(post => {
//       return (
//           <div className="card">
//               <h1>{post.word}:</h1>
//               <p>{post.def}</p>
//           </div>
//       )
//   })}
// </div> 
// <div>
// {Data.G.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.H.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.I.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.J.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.L.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.M.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.N.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.P.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.R.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.S.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.T.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// <div>
// {Data.W.map(post => {
//     return (
//         <div className="card">
//             <h1>{post.word}:</h1>
//             <p>{post.def}</p>
//         </div>
//     )
// })}
// </div> 
// </div> 
     
// </div>
//     );
// }

// export default Battleraplogy;


// function Battleraplogy () {
//   return (
//     <div><h1>Battleraplogy</h1><ul>{vocab["B"][0]["word"]}</ul></div>
    
//   )
// }

// export default Battleraplogy;