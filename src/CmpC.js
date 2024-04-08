// import React from 'react'
// import {data,data1} from "./CmpA"
// export default function CmpC(prop) {
//   return (
//     <div>
//         {/*to access single value */}
//         {/* <data.Consumer>
//             {
//                 (name)=>{
//                 return(
//                     <h1>my name is {name}</h1>
//                 )
//             }
//           }  
//         </data.Consumer> */}

      
//     </div>
    
//   )
// }

 /* for accesing multiple value */
 import  {useContext } from 'react';
 import {data,data1} from "./CmpA";

export default function CmpC() {
    const name = useContext(data)
    const add = useContext(data1)
  return (
    <div>
        <h1>my name is {name}</h1>
        <h1>my name is {add}</h1>
    </div>
    
  )
}
 
