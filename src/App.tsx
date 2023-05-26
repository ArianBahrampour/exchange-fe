import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import LandingPage from "./pages/Landing";
import { BalanceProvider } from "./components/context/BalanceContext";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <BalanceProvider>
                <LandingPage />
            </BalanceProvider>
        </ThemeProvider>
    );
};

export default App;
