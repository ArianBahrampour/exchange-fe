export type ExchangeRates = {
    [key: string]: number;
};

export const DEFAULT_RATES: ExchangeRates = {
    EUR: 1,
    GBP: 0.9,
    JPY: 120,
    USD: 1.1,
};

export const getExchangeRates = async (): Promise<ExchangeRates> => {
    const apiKey = process.env.REACT_APP_EXCHANGE_RATES_API_KEY;

    const response = await fetch(
        `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&symbols=GBP,JPY,EUR,USD`
    );

    console.log(response);

    if (response.status !== 200) {
        throw new Error("Error fetching exchange rates");
    }

    const data = await response.json();
    return data?.data?.rates;
};
