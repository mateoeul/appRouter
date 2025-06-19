import { Outlet } from "react-router-dom";
import Nav from "../components/nav/nav";

const MainLayout = () =>{
    
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default MainLayout