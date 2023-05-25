import { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";

import theme from "./theme";

const ThemeProvider = (props: { children: ReactNode }) => {
    return (
        <MuiThemeProvider theme={theme()}>
            <div>
                <CssBaseline />
                {props.children}
            </div>
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
