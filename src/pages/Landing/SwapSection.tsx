import { useContext, useState } from "react";
import { Grid, Typography } from "@mui/material";

import SwapVertIcon from "@mui/icons-material/SwapVert";

import { BalanceContext } from "../../context/BalanceContext";
import CurrencySelect from "../../components/inputs/CurrencySelect";
import { CURRENCIES, SUPPORTED_CURRENCIES } from "../../types/currency";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import CenterWrapper from "../../components/wrappers/CenterWrapper";

const SwapSection = () => {
    const { convertTwoCurrency, rates, balances } = useContext(BalanceContext);
    const [fromCurrency, setFromCurrency] = useState<SUPPORTED_CURRENCIES>(SUPPORTED_CURRENCIES.USD);
    const [toCurrency, setToCurrency] = useState<SUPPORTED_CURRENCIES>(SUPPORTED_CURRENCIES.EUR);
    const [fromAmount, setFromAmount] = useState<number | undefined>(undefined);
    const [toAmount, setToAmount] = useState<number | undefined>(undefined);

    let firstSelectError = balances.find((balance) => balance.currency.name === fromCurrency)?.balance! < fromAmount!;

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
                inputProps={{
                    startAdornment: <span style={{ fontSize: "1.5rem" }}>-</span>,
                }}
                formControlProps={{
                    error: firstSelectError,
                }}
            />
            <CenterWrapper>
                <SwapVertIcon sx={{ fontSize: "2.5rem" }} />
                <Typography variant="body1" fontWeight={600} color="GrayText">
                    {CURRENCIES[fromCurrency].symbol}1 = {CURRENCIES[toCurrency].symbol}
                    {((rates[toCurrency] ?? 1) / (rates[fromCurrency] ?? 1)).toPrecision(3)}
                </Typography>
            </CenterWrapper>
            <CurrencySelect
                title="To"
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
                inputProps={{
                    startAdornment: <span style={{ fontSize: "1.5rem" }}>+</span>,
                }}
            />
            {firstSelectError && (
                <Typography variant="caption" color="error">
                    Insufficient balance
                </Typography>
            )}
            <PrimaryButton
                sx={{ mt: "auto", width: "100%" }}
                onClick={() => {
                    convertTwoCurrency(fromCurrency, toCurrency, fromAmount ?? 0);
                    setFromAmount(undefined);
                    setToAmount(undefined);
                }}
                disabled={
                    fromAmount === 0 ||
                    fromAmount === undefined ||
                    toAmount === 0 ||
                    toAmount === undefined ||
                    firstSelectError
                }
            >
                Exchange
            </PrimaryButton>
        </Grid>
    );
};

export default SwapSection;
