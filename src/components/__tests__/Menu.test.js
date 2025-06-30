import "@testing-library/jest-dom";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import store from "../../utils/store";
import { StaticRouter } from "react-router";
import { MENU_DATA } from "../../mocks/data_new";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});
test("Add items in the cart", async () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => header.getByTestId("menu"));

  const addbtn = header.getAllByTestId("addbtn");

  act(() => {
    fireEvent.click(addbtn[0]);
  });

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart-1");
});
