import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Reducer from "../../reducers/Reducer";

const store = configureStore({ reducer: Reducer });

function renderWithProviders(ui: any = {}) {
	return render(<Provider store={store}>{ui}</Provider>, {
		wrapper: BrowserRouter,
	});
}

describe("FollowersList", () => {
	test("it renders the given site name in the header", async () => {
		renderWithProviders(<ProductList />);

		const followerDivElement = screen.getByText(`Möbel`);
		expect(followerDivElement).toBeInTheDocument();
	});
});
