import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home/Home";
import PersonaDetalle from "../pages/PersonaDetalle/PersonaDetalle";

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/estadistica" element={<h1>STATS</h1>}/>
                    <Route path="/contacto" element={<h1>CONTACTO</h1>}/>
                    <Route path="/persona/:id" element={<PersonaDetalle />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;