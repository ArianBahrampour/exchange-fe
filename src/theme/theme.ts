import { createTheme } from "@mui/material/styles";

const theme = () =>
    createTheme({
        direction: "rtl",
        typography: {
            fontFamily: "sans-serif",
            h5: {
                fontSize: "1.25rem",
                fontWeight: 700,
            },
            body1: {
                fontSize: "1.2rem",
            },
            body2: {
                fontSize: "0.875rem",
            },
        },
        palette: {
            mode: "dark",
            primary: {
                main: "rgb(252, 213, 53)",
            },
            secondary: {
                main: "rgb(252, 213, 53)",
            },
            text: {
                primary: "#fff",
                secondary: "#D31F52",
                disabled: "#616161",
            },
            background: {
                default: "#181A20",
                paper: "#181A20",
            },
        },
    });

export default theme;
