import React from "react";
import { BrowserRouter as  Router, Route, Routes} from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/AboutUs";
import NavBar from "../components/navBar/NavBar";
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}
            </Routes>
        </Router>
    )
}
export default AppRouter;