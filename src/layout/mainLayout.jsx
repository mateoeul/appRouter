import { Outlet } from "react-router-dom";
import Nav from "../components/nav/nav";

const MainLayout = () =>{
    return (
        <>
            <Nav />
            <div style={{ paddingTop: "8vh" }}>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout;