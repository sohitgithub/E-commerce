import { useState } from "react";

function Toggle_b()
{
    const [status,setStatus] = useState(true)
    return(
        <div>
            {
                status?<h1>gulllaaaaaa</h1>:null
            }

            <button onClick={()=>setStatus(!status)}>jo h ham hi h</button>
        </div>
    )
}
export default Toggle_b