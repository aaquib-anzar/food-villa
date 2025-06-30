import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router";

test("Logo should be loaded on rendering header", () => {
  //loading the header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //logo is loading
  const logo = header.getByTestId("logo");

  expect(logo.src).toBe(
    "https://yt3.googleusercontent.com/eTbFvSqrZRuYfPH9wbRpQwKPjpqkNQ52QQCBfBBNfrV1wCWP9ay6Ta75cCrYslHfJmbtBP_U=s900-c-k-c0x00ffffff-no-rj"
  );
});

test("Online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const status = header.getByTestId("online-status");
  expect(status.innerHTML).toBe("xyz ✅")
});

test("Cart must have zero items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart-0")
});