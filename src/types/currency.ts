export type Currency = {
    id: number;
    symbol: string;
    name: string;
    icon?: string;
};

export type CurrencyBalance = {
    currency: Currency;
    balance: number;
};

export enum SUPPORTED_CURRENCIES {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
}

export const CURRENCIES: {
    [key in SUPPORTED_CURRENCIES]: Currency;
} = {
    USD: {
        id: 1,
        symbol: "$",
        name: "USD",
    },
    EUR: {
        id: 2,
        symbol: "€",
        name: "EUR",
    },
    GBP: {
        id: 3,
        symbol: "£",
        name: "GBP",
    },
};
