import { Button, styled } from "@mui/material";

const PrimaryButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
}));

export default PrimaryButton;
