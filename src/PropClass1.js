import { Component } from "react"

class PropClass1 extends Component
{
    render()
    {
        console.log(this)
        return(
            <div>
               <h1>my name is {this.props.name}</h1>
               <h1>my age is {this.props.age}</h1>
               <h1>my address is {this.props.add}</h1>

            </div>
        )
    }
}
export default PropClass1