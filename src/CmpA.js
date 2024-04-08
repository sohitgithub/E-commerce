//session management
// for single value
// import React, { createContext } from 'react'
// import CmpB from './CmpB'
// const data = createContext()

// export default function CmpA() {
//     var name = "sohit"
//  return (
//     <div>
//       <data.Provider value={name} >
//         <CmpB></CmpB>
//       </data.Provider>
      
//     </div>
//   )
// }
// export {data}


//for accesssing multiple value
import React, { createContext } from 'react'
import CmpB from './CmpB'
const data = createContext()
const data1 = createContext()

export default function CmpA() {
    var name = "sohit"
    var add = "indore"
 return (
    <div>
      <data.Provider value={name} >
        <data1.Provider value={add}>
        <CmpB></CmpB>
        </data1.Provider>
      </data.Provider>
      
    </div>
  )
}
export {data,data1}