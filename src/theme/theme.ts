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
        shape: {
            borderRadius: 8,
        },
        palette: {
            mode: "dark",
            primary: {
                main: "#FCD535",
                light: "#474d5724",
            },
            secondary: {
                main: "#FCD535",
            },
            text: {
                primary: "#1E2329",
                secondary: "#474D57",
                disabled: "#616161",
            },
            background: {
                default: "#F5F5F5",
                paper: "#FFFFFF",
            },
        },
        components: {
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        borderBottom: "1px solid #E0E0E0",
                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        color: "#474D57 !important",
                    },
                },
            },
        },
    });

export default theme;
