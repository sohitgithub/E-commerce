import { PureComponent,setState } from "react"

class PureCmpnt extends PureComponent
{
    constructor()
    {
        super()
        this.state = 
        {
            count:0
        }
    }
    render()
    {
        console.log("Render")
        return(
            <div>
                <h1>count {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>submit</button>
            </div>
        )
    }

    

}
export default PureCmpnt