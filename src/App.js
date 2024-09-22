import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch,
    Navigate,
} from "react-router-dom";

import ProctectedRoutes from "./components/Routes/ProctectedRoutes";
import LoginSection from "./components/pages/Login/login";
import TopNavbarComponent from "./components/Topnavbar/Topbar";
import { useEffect, useState } from "react";

const App = () => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);

    // const [token, setToken] = useState(null);

    // useEffect(() => {
    //     // Function to asynchronously get the token from localStorage
    //     const getToken = async () => {
    //         const storedToken = await localStorage.getItem("token");
    //         setToken(storedToken);
    //     };

    //     getToken(); // Call the function to get the token

    //     // Cleanup the effect (optional)
    //     return () => {
    //         // You can perform cleanup tasks here if needed
    //     };
    // }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LoginSection />} />
                    <Route exact path="/login" element={<LoginSection />} />
                    {/* <Route path="/*" element={<ProctectedRoutes />} /> */}
                    {/* <Route
                        path="/*"
                        element={
                            token ? <ProctectedRoutes /> : <LoginSection />
                        }
                    /> */}
                    <Route
                        path="/*"
                        element={
                            token ? (
                                <>
                                    <TopNavbarComponent />
                                    <ProctectedRoutes />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                </Routes>
            </Router>
        </>
    );
};

export default App;
