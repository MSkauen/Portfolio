import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Landing from "./pages/Landing";

export function Application() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Landing/>}>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
}
