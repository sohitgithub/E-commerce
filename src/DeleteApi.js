import React, { useState } from 'react'

export default function DeleteApi() {

    const [id1,setId]=useState()
  

    function SubmitForm(e)
    {
        e.preventDefault();
       
      
        const id=parseInt(id1)
        
        const data={id}
    
    
        fetch("http://localhost:3002/posts/"+id,{
                method:"DELETE",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
    
        },
        body:JSON.stringify(data)
    }).then((result)=>{
      console.log(result)
    }
    )
    }
    
    
      
      return (
        <div>
         <form onSubmit={SubmitForm}>
         <input type="number" placeholder="Enter ID" onChange={(e)=>setId(e.target.value)}></input><br></br>
         
              <button>Submit</button>
              </form>   
        </div>
      )
    }