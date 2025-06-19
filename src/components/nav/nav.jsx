import ButtonText from "../buttonText/buttonText";
import "./style.css"
const Nav = () => {
    
    return (
        <>
            <div className="navbar">   
                <ButtonText name={"/"} text={"Home"} ></ButtonText>
                <ButtonText name={"/estadistica"} text={"Estadisticas"} ></ButtonText>
                <ButtonText name={"/contacto"} text={"Contacto"} ></ButtonText>
            </div>

        </>
    )
}
//                <ButtonText name={"/persona/:id"} text={"Persona"} ></ButtonText>
export default Nav