import React, { ReactNode } from "react";
import { CURRENCIES, CurrencyBalance, SUPPORTED_CURRENCIES } from "../types/currency";

type ContextProviderType = {
    balances: CurrencyBalance[];
    updateBalance: (currency: SUPPORTED_CURRENCIES, amount: number) => void;
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

export const BalanceContext = React.createContext<ContextProviderType>({
    balances: [],
    updateBalance: () => {},
});

export const BalanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [balances, setBalances] = React.useState<CurrencyBalance[]>(current_balances);

    const updateBalance = (currency: SUPPORTED_CURRENCIES, amount: number) => {
        const newBalances = balances.map((balance) => {
            if (balance.currency.name === currency) {
                return {
                    ...balance,
                    balance: amount,
                };
            }
            return balance;
        });
        setBalances(newBalances);
    };

    // const covertTwoCurrency = (from: SUPPORTED_CURRENCIES, to: SUPPORTED_CURRENCIES, amount: number) => {
    //     const fromCurrency = CURRENCIES[from];
    //     const toCurrency = CURRENCIES[to];
    //     const fromRate = fromCurrency.rate;
    //     const toRate = toCurrency.rate;
    //     const result = (amount * fromRate) / toRate;

    //     updateBalance(from, amount);
    //     updateBalance(to, result);
    //     return result;
    // };

    const value = {
        balances,
        updateBalance,
    };

    return <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>;
};
