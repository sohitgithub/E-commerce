import { useState,useEffect } from "react"

function UseEff2()
{
    
    const[count,setCount] = useState(0)
    const [Data,setData] = useState(10)
    const [Run,setRun] = useState(100)

    useEffect(()=>{
        console.log("loading")
    })
    return(
        <div>
            <h1>Count :{count}</h1>
            <h1>Data : {Data}</h1>
            <h1>Run : {Run}</h1>
            <button onClick={()=>setCount(count+1)}>count</button>
            <button onClick={()=>setData(Data+1)}>Data</button>
            <button onClick={()=>setRun(Run+1)}>Run</button>
        </div>
    )
}
export default UseEff2
