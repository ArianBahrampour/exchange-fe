import { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";

import SwapVertIcon from "@mui/icons-material/SwapVert";

import { BalanceContext } from "../../context/BalanceContext";
import CurrencySelect from "../../components/inputs/CurrencySelect";
import { SUPPORTED_CURRENCIES } from "../../types/currency";
import PrimaryButton from "../../components/buttons/PrimaryButton";
const SwapSection = () => {
    const { fetchExchangeRates, convertTwoCurrency, rates } = useContext(BalanceContext);
    const [fromCurrency, setFromCurrency] = useState<SUPPORTED_CURRENCIES>(SUPPORTED_CURRENCIES.USD);
    const [toCurrency, setToCurrency] = useState<SUPPORTED_CURRENCIES>(SUPPORTED_CURRENCIES.EUR);
    const [fromAmount, setFromAmount] = useState<number | undefined>(undefined);
    const [toAmount, setToAmount] = useState<number | undefined>(undefined);

    useEffect(() => {
        fetchExchangeRates();
    }, [fetchExchangeRates]);

    return (
        <Grid item xs={12} md={6}>
            <CurrencySelect
                title="From"
                onCurrencyChange={(currency) => {
                    setFromCurrency(currency);
                    setToAmount((rates[toCurrency] / rates[fromCurrency]) * fromAmount!);
                }}
                onAmountChange={(amount) => {
                    setFromAmount(amount);
                    setToAmount((rates[toCurrency] / rates[fromCurrency]) * amount!);
                }}
                currency={fromCurrency}
                amount={fromAmount}
            />
            <SwapVertIcon />
            <CurrencySelect
                title="to"
                onCurrencyChange={(currency) => {
                    setToCurrency(currency);
                    setToAmount((rates[toCurrency] / rates[fromCurrency]) * fromAmount!);
                }}
                onAmountChange={(amount) => {
                    setToAmount(amount);
                    setFromAmount((rates[fromCurrency] / rates[toCurrency]) * amount!);
                }}
                currency={toCurrency}
                amount={toAmount}
            />

            <PrimaryButton
                sx={{ mt: "auto" }}
                onClick={() => convertTwoCurrency(fromCurrency, toCurrency, fromAmount ?? 0)}
            >
                Exchange
            </PrimaryButton>
        </Grid>
    );
};

export default SwapSection;
