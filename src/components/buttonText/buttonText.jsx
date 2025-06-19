import { Link } from "react-router-dom";
import "./style.css"

const ButtonText = ({name, text}) =>{

    return <Link to={name}> <h1>{text}</h1></Link>
}

export default ButtonText