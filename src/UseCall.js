// connect with child4.js
import React, { useCallback, useState } from 'react'
import Child4 from './Child4'

export default function UseCall() {
    const [data,setdata]=useState(0)
    const useCall = useCallback(
    function hello()
    {

    } ,[])

  return (
    <div>
        <Child4 hello={useCall}></Child4>
      <h1>Data:{data}</h1>
      <button onClick={()=>setdata(data+1)}>submit</button>
    </div>
  )
}
