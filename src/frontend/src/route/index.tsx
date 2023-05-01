import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hello from "../components/hello/Hello";

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="hello" element={<Hello />} />
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById("app") as Element;
const root = createRoot(container);
root.render(<App />);
