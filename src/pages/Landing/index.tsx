import { Container, Grid } from "@mui/material";
import LandingCard from "../../components/cards/LandingCard";
import BalanceSummary from "./BalanceSummary";
import { useContext, useEffect } from "react";
import { BalanceContext } from "../../context/BalanceContext";
import SwapSection from "./SwapSection";

const LandingPage = () => {
    const { fetchExchangeRates } = useContext(BalanceContext);

    useEffect(() => {
        fetchExchangeRates();
    }, [fetchExchangeRates]);

    return (
        <Container
            maxWidth="md"
            sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <LandingCard title="Currency Exchange🚀">
                <Grid container spacing={6}>
                    <SwapSection />
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <Grid item xs={12} md={6}>
                        <BalanceSummary />
                    </Grid>
                </Grid>
            </LandingCard>
        </Container>
    );
};

export default LandingPage;
