import { useContext } from "react";
import { BalanceContext } from "../../context/BalanceContext";
import { Typography } from "@mui/material";

const BalanceSummary: React.FC = () => {
    const balanceCtx = useContext(BalanceContext);

    return (
        <div>
            {balanceCtx?.balances?.map((balance) => {
                return (
                    <div>
                        <Typography>{balance.currency.symbol}</Typography>
                        <Typography>{balance.balance}</Typography>
                    </div>
                );
            })}
        </div>
    );
};

export default BalanceSummary;
