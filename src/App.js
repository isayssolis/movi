import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateAccount from "./components/Pages/CreateAccount";
import Nav from "./components/Navigation/Nav";
import NotFound from "./components/Pages/NotFound";
import CreateAccountConfirm from "./components/Pages/CreateaccountConfirm";
import {AppContext} from "./components/Context/AppContext";
import Success from "./components/Pages/Success";
import Onboarding from "./components/Pages/Onboarding";


const App = () => {
    const [context, setContext] = useState({});

    return (
        <AppContext.Provider value={[context, setContext]}>
            <Router>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<CreateAccount />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/create-account/confirm" element={<CreateAccountConfirm/>} />
                    <Route path="/success" element={<Success/>} />
                    <Route path="/onboarding" element={<Onboarding/>} />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Router>
        </AppContext.Provider>
    );
}

export default App