// for knowing type of any variable use (type of var)
//for checking condition in jsx(react) we use ternary operator as a expression(is.else nhi kaam krta)

import { useState } from "react";

function Conditional_Statment()
{
    const [status,setStatus] = useState(true)
    return(
        <div>
            {
                status?<h1>gulllaaaaaa</h1>:null
            }
            <button onClick={()=>setStatus(false)}>ham na dekh rahe bhaiya</button>
            <button onClick={()=>setStatus(true)}>ha dikhaao </button>
        </div>
    )
}
export default Conditional_Statment