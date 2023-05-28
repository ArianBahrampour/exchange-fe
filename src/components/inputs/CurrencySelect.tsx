import { FC } from "react";
import MenuItem from "@mui/material/MenuItem";
import { InputProps, Input, styled, FormControl, InputLabel, FormControlTypeMap } from "@mui/material";
import Select from "@mui/material/Select";

import { CURRENCIES, SUPPORTED_CURRENCIES } from "../../types/currency";

const ContainerBox = styled(FormControl)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-end",
    flexWrap: "wrap",
    margin: "32px 0px",
}));

export type CurrencySelectProps = {
    title: string;
    amount?: number;
    inputProps?: InputProps;
    formControlProps?: FormControlTypeMap["props"];
    currency: SUPPORTED_CURRENCIES;
    onCurrencyChange: (currency: SUPPORTED_CURRENCIES) => void;
    onAmountChange: (amount?: number) => void;
};

const getFixedPrecisionValue = (value: number): string => {
    const valueString = value.toString();
    const decimalIndex = valueString.indexOf(".");
    if (decimalIndex === -1) {
        return valueString;
    }

    return valueString.slice(0, decimalIndex + 4);
};

const CurrencySelect: FC<CurrencySelectProps> = ({
    title,
    amount,
    currency,
    onCurrencyChange,
    onAmountChange,
    inputProps,
    formControlProps,
}) => {
    return (
        <ContainerBox variant="outlined" {...formControlProps}>
            <InputLabel sx={{ ml: -1 }}>{title}</InputLabel>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
                <div style={{ width: "80%", paddingTop: "20px" }}>
                    <Input
                        type="number"
                        value={amount ? getFixedPrecisionValue(amount) : ""}
                        onChange={(e) => onAmountChange(e.target.value !== "" ? parseFloat(e.target.value) : undefined)}
                        {...inputProps}
                    />
                </div>
                <div style={{ width: "20%" }}>
                    <Select
                        value={currency}
                        variant="standard"
                        onChange={(e) => onCurrencyChange(e.target.value as SUPPORTED_CURRENCIES)}
                    >
                        {Object.keys(CURRENCIES).map((currency) => {
                            return (
                                <MenuItem value={currency}>
                                    {CURRENCIES[currency as SUPPORTED_CURRENCIES].symbol}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </div>
            </div>
        </ContainerBox>
    );
};

export default CurrencySelect;
