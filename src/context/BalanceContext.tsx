import React, { ReactNode } from "react";
import { CURRENCIES, CurrencyBalance, SUPPORTED_CURRENCIES } from "../types/currency";
import { DEFAULT_RATES, ExchangeRates, getExchangeRates } from "../utils/exchangerates";

type ContextProviderType = {
    balances: CurrencyBalance[];
    rates: ExchangeRates;
    fetchExchangeRates: () => void;
    updateBalance: (currency: SUPPORTED_CURRENCIES, amount: number) => void;
    convertTwoCurrency: (from: SUPPORTED_CURRENCIES, to: SUPPORTED_CURRENCIES, amount: number) => number;
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
    rates: {},
    updateBalance: () => {},
    fetchExchangeRates: () => {},
    convertTwoCurrency: () => 0,
});

export const BalanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [balances, setBalances] = React.useState<CurrencyBalance[]>(current_balances);
    const [rates, setRates] = React.useState<ExchangeRates>({});
    const updateBalance = (currency: SUPPORTED_CURRENCIES, amount: number) => {
        setBalances((prevState) => {
            const newBalances = prevState.map((balance) => {
                if (balance.currency.name === currency) {
                    return {
                        ...balance,
                        balance: amount,
                    };
                }
                return balance;
            });
            return newBalances;
        });
    };

    const fetchExchangeRates = () => {
        getExchangeRates()
            .then((rates) => {
                setRates(rates);
            })
            .catch((error) => {
                console.log(error);
                setRates(DEFAULT_RATES);
            });
    };

    const convertTwoCurrency = (from: SUPPORTED_CURRENCIES, to: SUPPORTED_CURRENCIES, amount: number) => {
        const fromCurrency = CURRENCIES[from];
        const toCurrency = CURRENCIES[to];
        const fromRate = rates[fromCurrency.name] || 1;
        const toRate = rates[toCurrency.name] || 1;
        const fromBalance = balances.find((balance) => balance.currency.name === fromCurrency.name)?.balance!;
        const toBalance = balances.find((balance) => balance.currency.name === toCurrency.name)?.balance!;

        const result = (amount * toRate) / fromRate;

        updateBalance(from, fromBalance - amount);
        updateBalance(to, toBalance + result);
        return result;
    };

    const value = {
        balances,
        rates,
        updateBalance,
        convertTwoCurrency,
        fetchExchangeRates,
    };

    return <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>;
};
