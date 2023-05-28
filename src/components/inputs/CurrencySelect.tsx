import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Input, InputProps } from "@mui/material";
import Select from "@mui/material/Select";

import { CURRENCIES, SUPPORTED_CURRENCIES } from "../../types/currency";
import { FC } from "react";

export type CurrencySelectProps = {
    title: string;
    amount?: number;
    inputProps?: InputProps;
    currency: SUPPORTED_CURRENCIES;
    onCurrencyChange: (currency: SUPPORTED_CURRENCIES) => void;
    onAmountChange: (amount?: number) => void;
};

const CurrencySelect: FC<CurrencySelectProps> = ({
    title,
    amount,
    currency,
    onCurrencyChange,
    onAmountChange,
    inputProps,
}) => {
    return (
        <Box sx={{ minWidth: 120 }}>
            <InputLabel>{title}</InputLabel>
            <Input
                type="number"
                value={amount}
                onChange={(e) => onAmountChange(parseFloat(e.target.value))}
                {...inputProps}
            />
            <Select value={currency} onChange={(e) => onCurrencyChange(e.target.value as SUPPORTED_CURRENCIES)}>
                {Object.keys(CURRENCIES).map((currency) => {
                    return <MenuItem value={currency}>{CURRENCIES[currency as SUPPORTED_CURRENCIES].symbol}</MenuItem>;
                })}
            </Select>
        </Box>
    );
};

export default CurrencySelect;
