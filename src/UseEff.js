import { useEffect,useState } from "react";
//combination of mount update & unmount
function UseEff()
{
    const[count,setCount] = useState(0)
    useEffect(()=>{
        console.log("loading")
    })
    return(
        <div>
            <h1>Count :{count}</h1>
            <button onClick={()=>setCount(count+1)}>count</button>
        </div>
    )
}
export default UseEff