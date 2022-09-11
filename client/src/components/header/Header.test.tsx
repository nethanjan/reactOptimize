import React from "react";

import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("it renders the given site name in the header", () => {
	const siteName = "Home24";
	render(<Header />);
	expect(screen.getByText(`${siteName}`)).toBeInTheDocument();
});
