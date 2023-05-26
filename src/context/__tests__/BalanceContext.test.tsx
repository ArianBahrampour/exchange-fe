import { render, shallow } from "enzyme";

import { BalanceProvider, BalanceContext } from "../BalanceContext";
import { SUPPORTED_CURRENCIES } from "../../types/currency";

describe("BalanceProvider", () => {
    it("renders without crashing", () => {
        render(
            <BalanceProvider>
                <div>Test</div>
            </BalanceProvider>
        );
    });

    it("provides balances in the context", () => {
        const wrapper = shallow(
            <BalanceProvider>
                <BalanceContext.Consumer>{(context) => <div>{context.balances.length}</div>}</BalanceContext.Consumer>
            </BalanceProvider>
        )
            .dive()
            .dive();

        expect(wrapper.find("div").text()).toBe("3"); // Assuming the current_balances array has 3 items
    });

    it("provides balances and updateBalance function in the context", () => {
        const wrapper = shallow(
            <BalanceProvider>
                <BalanceContext.Consumer>
                    {(context) => (
                        <div>
                            <span>{context.balances.length}</span>
                            <button onClick={() => context.updateBalance(SUPPORTED_CURRENCIES.USD, 100)}>Update</button>
                        </div>
                    )}
                </BalanceContext.Consumer>
            </BalanceProvider>
        );
        const divedWrapper = wrapper.dive().dive();
        expect(divedWrapper.find("span").text()).toBe("3"); // Assuming the current_balances array has 3 items

        divedWrapper.find("button").simulate("click");
        const updatedWrapper = wrapper.update();
        expect(divedWrapper.find("span").text()).toBe("3"); // Balances length remains the same

        const updatedBalances = updatedWrapper.find(BalanceContext.Provider).prop("value").balances;
        expect(updatedBalances?.find((balance) => balance.currency.name === "USD")?.balance).toBe(100); // USD balance is updated to 100
    });
});
