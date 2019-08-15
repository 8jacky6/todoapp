import React from "react";
import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import { Main } from "./screens/Main";

const App: React.FC = () => {
    return (
        <div>
            <Navigation />
            <Main />
        </div>
    );
};

export default App;
