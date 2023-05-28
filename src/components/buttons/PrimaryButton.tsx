import { Button, styled } from "@mui/material";

const PrimaryButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    fontWeight: "bold",
    minHeight: "50px",
    ":hover": {
        backgroundColor: theme.palette.primary.dark,
    },
    ":disabled": {
        backgroundColor: theme.palette.primary.light,
        color: "white",
    },
}));

export default PrimaryButton;
