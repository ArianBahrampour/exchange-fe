import { Card, Container, Divider, Grid, Typography } from "@mui/material";
import LandingCard from "../../components/cards/LandingCard";
import CurrencySelect from "../../components/inputs/CurrencySelect";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import BalanceSummary from "./BalanceSummary";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const LandingPage = () => {
    return (
        <Container
            maxWidth="md"
            sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <LandingCard title="Currency Exchange🚀">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <CurrencySelect />
                        <SwapVertIcon />
                        <CurrencySelect />
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <Grid item xs={12} md={6}>
                        <BalanceSummary />
                        <PrimaryButton sx={{ mt: "auto" }}>Exchange</PrimaryButton>
                    </Grid>
                </Grid>
            </LandingCard>
        </Container>
    );
};

export default LandingPage;
