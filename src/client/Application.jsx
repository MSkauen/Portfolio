import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    );
}
