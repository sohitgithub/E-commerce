import { useState } from "react";

function Input()
{
    const [data,setData] = useState()
    return(
        <div>
            <input type ="text" placeholder ="ha likho kuch" onChange={(e)=>setData(e.target.value)}></input>
            <h1>{data}</h1>
        </div>
    )
}
export default Input