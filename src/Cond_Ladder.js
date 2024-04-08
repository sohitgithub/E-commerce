import { useState } from "react";

function Cond_Ladder()
{
    const [status,setStatus] = useState(4)
    return(
        <div>
            {
                status==1?<h1>gulllaaaaaa</h1>
                :status==2?<h1>laddduuu</h1>
                :status==3?<h1>boondi</h1>:null
            }
           {
            <button onClick={()=>setStatus(!status)}>jo h ham hi h</button>
           }
        </div>
    )
}
export default Cond_Ladder