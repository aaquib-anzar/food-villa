import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/data_new";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
test("Shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(20);
});

test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(20);
});

test("Search for String(King) on Home Page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-txt");

  act(() => {
    fireEvent.change(input, {
      target: {
        value: "King",
      },
    });
  });

  const searchbtn = body.getByTestId("search-btn");

  act(() => {
    fireEvent.click(searchbtn);
  });

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(1);
});
