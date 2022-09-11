import React from "react";

import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("it renders the given text in the footer", () => {
	render(<Footer />);
	expect(
		screen.getByText(
			`Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.`
		)
	).toBeInTheDocument();
});
