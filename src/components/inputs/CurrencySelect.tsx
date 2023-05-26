import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Input } from "@mui/material";
import { CURRENCIES, SUPPORTED_CURRENCIES } from "../types/currency";

const CurrencySelect = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <InputLabel>From</InputLabel>
            <Input />
            <Select value={age} onChange={handleChange}>
                {Object.keys(CURRENCIES).map((currency) => {
                    return <MenuItem value={currency}>{CURRENCIES[currency as SUPPORTED_CURRENCIES].symbol}</MenuItem>;
                })}
            </Select>
        </Box>
    );
};

export default CurrencySelect;
