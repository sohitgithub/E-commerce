import Child1 from "./Child1"
function Parent1()
{
    function hello(name)
    {
        alert("hello"+name)
    }
    return(
        <div>
            <Child1 name={hello}></Child1>
        </div>
    )
}
export default Parent1