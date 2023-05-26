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
            },
            secondary: {
                main: "#FCD535",
            },
            text: {
                primary: "#1E2329",
                secondary: "#1E2329",
                disabled: "#616161",
            },
            background: {
                default: "#F5F5F5",
                paper: "#FFFFFF",
            },
        },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderColor: "#EAECEF",
                    },
                    input: {
                        borderColor: "#EAECEF",
                    },
                },
            },
        },
    });

export default theme;
