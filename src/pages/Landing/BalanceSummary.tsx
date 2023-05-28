import { useContext } from "react";
import { BalanceContext } from "../../context/BalanceContext";
import { Typography } from "@mui/material";

const BalanceSummary: React.FC = () => {
    const balanceCtx = useContext(BalanceContext);

    return (
        <div>
            <Typography variant="h6" fontWeight={600}>
                Wallet Balance
            </Typography>
            {balanceCtx?.balances?.map((balance, index) => {
                return (
                    <Typography color="GrayText" key={index}>
                        <span style={{ marginRight: "2px" }}>{balance.currency.symbol}</span>
                        {balance.balance.toFixed(2)}
                    </Typography>
                );
            })}
        </div>
    );
};

export default BalanceSummary;
