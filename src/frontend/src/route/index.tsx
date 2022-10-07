import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Address from "../components/address/Address";
import Hello from "../components/hello/Hello";

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="hello" element={<Hello />} />
                <Route path="address" element={<Address />} />
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
