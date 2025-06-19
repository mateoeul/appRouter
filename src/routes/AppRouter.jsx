import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<h1>HOME</h1>}/>
                <Route path="/persona/:id" element={<h1>persona</h1>}/>
                <Route path="/estadistica" element={<h1>STATS</h1>}/>
                <Route path="/contacto" element={<h1>CONTACTO</h1>}/>
 
            </Routes>
        </Router>

    )
}
