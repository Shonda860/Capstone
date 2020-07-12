import React from 'react';
import Data from './data.json'

function Battleraplogy() { 

    return (
     <div>
       <div>
        {Data.A.map(post => {
            return (
                <div>
                    <h1>{post.word}</h1>
                    <p>{post.def}</p>
                </div>
            )
        })}
     </div> 
     <div>
        {Data.B.map(post => {
            return (
                <div>
                    <h1>{post.word}</h1>
                    <p>{post.def}</p>
                </div>
            )
        })}
     </div> 
     <div>
        {Data.C.map(post => {
            return (
                <div>
                    <h1>{post.word}</h1>
                    <p>{post.def}</p>
                </div>
            )
        })}
     </div> 
     
</div>
    );
}

export default Battleraplogy;


// function Battleraplogy () {
//   return (
//     <div><h1>Battleraplogy</h1><ul>{vocab["B"][0]["word"]}</ul></div>
    
//   )
// }

// export default Battleraplogy;