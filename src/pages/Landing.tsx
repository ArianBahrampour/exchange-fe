import { Card, Container, Divider, Typography } from "@mui/material";
import LandingCard from "../components/cards/LandingCard";
import CurrencySelect from "../components/inputs/CurrencySelect";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import BalanceSummary from "../components/balance/BalanceSummary";
import PrimaryButton from "../components/buttons/PrimaryButton";

const LandingPage = () => {
    return (
        <Container
            maxWidth="md"
            sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <LandingCard title="Currency Exchange🚀">
                <CurrencySelect />
                <SwapVertIcon />
                <CurrencySelect />

                <Divider orientation="vertical" flexItem />

                <BalanceSummary />
                <PrimaryButton>Exchange</PrimaryButton>
            </LandingCard>
        </Container>
    );
};

export default LandingPage;
