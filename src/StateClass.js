const {Component} =require('react')
export default class StateClass extends Component 
{
    constructor()
    {
        super();
        this.state={name:"ram",age:22}
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={()=>this.setState({name:"sohit",age:24})}>Ok</button>
                
            </div>
        )
    }
}

