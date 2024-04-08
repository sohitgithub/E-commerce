//isme phle consrtuctor fir render fir component did mount chalega chahe wo kahi bhi declare ho 
// component did mount --> used to call api 
import { Component } from "react";

class Mount extends Component
{
    componentDidMount()
    {
        console.log("Component Did Mount")
    }
      render()
      {
        console.log("Render")
        return(
            <div>
                <h1>Mount</h1>
            </div>
        )
     }
     constructor()
     {
        super()
        console.log("constructor")
     }
}
export default Mount