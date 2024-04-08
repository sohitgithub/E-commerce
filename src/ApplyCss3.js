import "./Applycss3.css"
import style from "./Apply.module.css"
function ApplyCss3()
{
    return(
        <div>
            
            <h1 style={{backgroundColor:"Red",color:"white"}}>inline css</h1>
            <h1 className="internal">internal css</h1>
            <h1 className={style.hello2}>moduler css</h1>
        </div>
    )
}
export default ApplyCss3