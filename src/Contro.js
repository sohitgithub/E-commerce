import { useState } from "react"

function Contro()
{
    const [name,setname]=useState();
    const [number,setNumber]=useState();
function submitForm(e)
{
    e.preventDefault()
    console.log(name,number)
}
  return(
    <div>
        <form onSubmit={submitForm}>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}></input>
            <input type="number" placeholder="Enter Number" onChange={(e)=>setNumber(e.target.value)}></input>
<button>Submit</button>
        </form>
    </div>
  )
}
export default Contro