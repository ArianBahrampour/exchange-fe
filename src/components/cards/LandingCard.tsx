import { styled } from "@mui/material";
import React from "react";
import famAd from "../../assets/images/fam_ad.gif";

const Container = styled("div")(({ theme }) => ({
    background: `url(${famAd})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "auto",
    minHeight: "70px",
}));

const LandingCard: React.FC = () => {
    return (
        <a target="_blank" href="https://fampayment.com/" rel="noreferrer">
            <Container></Container>
        </a>
    );
};

export default LandingCard;
