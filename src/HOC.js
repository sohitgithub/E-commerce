//all component is passed in a function for reuse the component in a function

import { useState } from "react"

var HOC =()=>
{
    return(
        <div>
         <center>
         <RedCmp cmp ={Counter}></RedCmp>
         <GreenCmp cmp ={Counter}></GreenCmp>
         </center>
        </div>
    )
}
function RedCmp(prop)
{
    return (
    <h1 style={{backgroundColor:"red",width:"200px"}}><prop.cmp></prop.cmp></h1>
    )
}

function GreenCmp(prop)
{
    return (
    <h1 style={{backgroundColor:"green",width:"200px"}}><prop.cmp></prop.cmp></h1>
    )
}

function Counter()
{
    const[count,setCount]=useState(0)
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>submit</button>
        </div>
    )
}
export default HOC