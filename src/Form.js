import { useState } from "react"

function Form()
{
      const [name,setName] = useState();
      const [age,setAge] = useState();
      const [country,setCountry] = useState();
      function submitForm(e)
      
    {
        e.preventDefault() //it stops to reload page
        console.log(name,age,country)
    }
    return(
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="naam likh idhar abhi" onChange={(e)=>setName(e.target.value)}></input><br></br>
                <input type="number" placeholder="ab umar likh " onChange={(e)=>setAge(e.target.value)}></input><br></br>
                Select Country<select onChange={(e)=>setCountry(e.target.value)}>
                     <option>India</option>
                     <option>chaina</option>
                     <option>pakistan</option>
                     <option>mulk</option>
                     <option>maksad</option>

                    
                </select><br></br>
                <button>submit</button>
            
            </form>
        </div>
    )
}
export default Form