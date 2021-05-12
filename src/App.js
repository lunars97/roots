import React from "react";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Routes from "./Routes";

function App() {
    return (
        <AuthProvider>
            <Routes></Routes>
        </AuthProvider>
    );
}

export default App;
