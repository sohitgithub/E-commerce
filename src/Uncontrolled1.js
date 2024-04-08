import { useRef} from "react";


function Uncontrolled1()
{
    const inputref=useRef()
    function hello()
        {
            inputref.current.value="hlo";
            console.log(inputref.current.value)
        }
    
    
    return(
         <div>
            <input type="text" placeholder="enter name" ref={inputref}></input>
            <button onClick={()=>hello()}>ok</button>
         </div>
        )
 }
export default Uncontrolled1