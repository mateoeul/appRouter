import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home/Home";
import PersonaDetalle from "../pages/PersonaDetalle/PersonaDetalle";
import Stats from "../pages/Stats/Stats";

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/estadistica" element={<Stats />}/>
                    <Route path="/contacto" element={<h1>CONTACTO</h1>}/>
                    <Route path="/persona/:id" element={<PersonaDetalle />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;