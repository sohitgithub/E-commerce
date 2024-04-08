// props is used for bring data fromm one file and show on another file(server to client).
import PropClass1 from "./PropClass1";

const { Component } = require("react");

class PropClass extends Component
{
    render()
    {
        return(
            <div>
                <PropClass1 name ="sohit" age="22" add="indore"></PropClass1>
            </div>
        )
    }
}
export default PropClass