import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from '../layout/mainLayout'

import Home from "../pages/Home/Home";
import PersonaDetalle from "../pages/PersonaDetalle/PersonaDetalle";
import Stats from "../pages/Stats/Stats";
import Contacto from "../pages/Contacto/Contacto";

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/estadistica" element={<Stats />}/>
                    <Route path="/contacto" element={<Contacto />}/>
                    <Route path="/persona/:id" element={<PersonaDetalle />}/>
                    <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;