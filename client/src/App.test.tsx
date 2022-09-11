import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducers/Reducer";
import { Provider } from "react-redux";

function renderWithProviders(ui: any = {}) {
	const store = configureStore({ reducer: Reducer });
	return render(<Provider store={store}>{ui}</Provider>, {
		wrapper: BrowserRouter,
	});
}

test("it renders the page content as loading without api mocking", async () => {
	renderWithProviders(<App />);

	// verify page content for default route
	expect(screen.getByText(`Home24`)).toBeInTheDocument();
	expect(screen.getByText(`Loading...`)).toBeInTheDocument();
	expect(screen.getByText(`Items not found`)).toBeInTheDocument();
});
