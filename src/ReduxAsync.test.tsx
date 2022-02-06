import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import customCounterReducer from "../src/features/customCounter/customCounterSlice";
import ReduxAync from "./ReduxAync";

afterEach(() => cleanup());

describe("ReduxAync test", () => {
  let store: EnhancedStore;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });

  it("Should display value with 100 + payload", async () => {
    render(
      <Provider store={store}>
        <ReduxAync />
      </Provider>
    );
    userEvent.click(screen.getByText("FetchDummy"));
    expect(await screen.findByTestId("count-value")).toHaveTextContent("105");
  });
});
