import { Link } from "react-router-dom";

const ButtonText = ({name, text}) =>{

    return <Link to={name}>{text}</Link>
}

export default ButtonText