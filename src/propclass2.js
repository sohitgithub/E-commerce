// connect it with propclass1.js and app.js.
import { Component } from "react";
import PropClass1 from "./PropClass1";

class PropClass2 extends Component
{
    constructor(){
        super()
        this.state={
            name:"Akshat",
            age:35,
            add:"bhopal"
        }
    }
    render()
    {
      return(
        <div>
            <PropClass1 name = {this.state.name} age = {this.state.age} add = {this.state.add} ></PropClass1>
            <button onClick={()=> this.setState({
                name:"mohit",
                age:25,
                add:"bhopal"
            })}>submit </button>
        </div>
      )
    }
}
export default PropClass2