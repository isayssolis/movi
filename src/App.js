import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateAccount from "./components/Pages/CreateAccount";
import Nav from "./components/Navigation/Nav";
import NotFound from "./components/Pages/NotFound";
import CreateAccountConfirm from "./components/Pages/CreateaccountConfirm";


const App = () => {

    return (
        <Router>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<NotFound />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/create-account/confirm" element={<CreateAccountConfirm/>} />
                <Route path="/onboarding" element={<CreateAccount />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    );
}

export default App