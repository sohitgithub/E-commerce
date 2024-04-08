import { Component } from "react";

class Update2 extends Component
{
constructor()
{
  super()
  this.state = 
  {
    count:0
  }
}

shouldComponentUpdate()
{
    if(this.state.count>5 && this.state.count<10)
    {
        console.log("should component update")
        return true
    }
    else{
        return false
    }
}
render()
{
    console.log("Render")
    return(
        <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Submit</button>
        </div>
    )
}
componentDidUpdate()
{
    console.log("component did update")
}
}
export default Update2