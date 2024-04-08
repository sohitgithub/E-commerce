//ref is used for DOM manipulation
//uncontrlled fun slow the performence of s/w
//uncontrolled is directly change in dom not using prop & state(indirectly)
import { Component ,createRef} from "react";


class Uncontrolled extends Component
{
    constructor()
    {
        super()
        this.inputref=createRef();
    }    
    hello()
     {
        this.inputref.current.value="hlo";
        this.inputref.current.style.color = "red";
        this.inputref.current.style.backgroundColor="green";
    }
    
    render()
    {
        console.log("Render")
           return(
            <div>
               <input type="text" placeholder="enter name" ref={this.inputref}></input>
               <button onClick={()=>this.hello()}>ok</button>
            </div>
        )
    }
}
export default Uncontrolled