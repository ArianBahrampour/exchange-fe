import React from "react";
import { mount } from "enzyme";
import CurrencySelect from "../CurrencySelect";
import { SUPPORTED_CURRENCIES } from "../../../types/currency";

describe("CurrencySelect", () => {
    const mockOnCurrencyChange = jest.fn();
    const mockOnAmountChange = jest.fn();

    beforeEach(() => {
        mockOnCurrencyChange.mockClear();
        mockOnAmountChange.mockClear();
    });

    it("should render title and input correctly", () => {
        const wrapper = mount(
            <CurrencySelect
                title="Select Currency"
                amount={100}
                currency={SUPPORTED_CURRENCIES.USD}
                onCurrencyChange={mockOnCurrencyChange}
                onAmountChange={mockOnAmountChange}
            />
        );

        const input = wrapper.find("input").first();
        expect(input.prop("value")).toBe("100");
    });

    it("should call onCurrencyChange when a currency is selected", () => {
        const wrapper = mount(
            <CurrencySelect
                title="Select Currency"
                amount={100}
                currency={SUPPORTED_CURRENCIES.USD}
                onCurrencyChange={mockOnCurrencyChange}
                onAmountChange={mockOnAmountChange}
            />
        );

        const select = wrapper.find("select");
        select.simulate("change", { target: { value: "EUR" } });

        expect(mockOnCurrencyChange).toHaveBeenCalledWith("EUR");
    });

    it("should call onAmountChange when the input value changes", () => {
        const wrapper = mount(
            <CurrencySelect
                title="Select Currency"
                amount={100}
                currency={SUPPORTED_CURRENCIES.USD}
                onCurrencyChange={mockOnCurrencyChange}
                onAmountChange={mockOnAmountChange}
            />
        );

        const input = wrapper.find("input").first();
        input.simulate("change", { target: { value: "200" } });

        expect(mockOnAmountChange).toHaveBeenCalledWith(200);
    });
});
