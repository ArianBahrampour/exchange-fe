import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import LandingPage from "./pages/Landing";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <LandingPage />
        </ThemeProvider>
    );
};

export default App;
