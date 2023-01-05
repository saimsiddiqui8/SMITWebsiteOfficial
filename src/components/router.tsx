import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";

const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/"  element={<Home />}/>
                <Route path="/about"  element={<About />}/> */}
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default AppRouter