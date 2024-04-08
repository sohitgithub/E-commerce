import { useState } from "react";

// hook is used to implement class component life cycle method inside the function
function Hook()
{
    const [name,setName]=useState("sohit")
    return(
        <div>
            <h1>my name is {name}</h1>
            <button onClick={()=>setName("mohit")}>daba</button>
        </div>
    )
}
export default Hook