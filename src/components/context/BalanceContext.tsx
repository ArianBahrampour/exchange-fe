import React, { ReactNode } from "react";
import { CURRENCIES, CurrencyBalance, SUPPORTED_CURRENCIES } from "../types/currency";

type ContextProviderType = {
    balances: CurrencyBalance[];
};

const current_balances: CurrencyBalance[] = [
    {
        currency: CURRENCIES[SUPPORTED_CURRENCIES.USD],
        balance: 200,
    },
    {
        currency: CURRENCIES[SUPPORTED_CURRENCIES.EUR],
        balance: 150,
    },
    {
        currency: CURRENCIES[SUPPORTED_CURRENCIES.GBP],
        balance: 10,
    },
];

export const BalanceContext = React.createContext<ContextProviderType | null>(null);

export const BalanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [balances, setBalances] = React.useState<CurrencyBalance[]>(current_balances);

    const value = {
        balances,
    };

    return <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>;
};
