import React from "react";

import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation";

function App() {
	return (
		<>
			<Routes>
				<Route path="/*" element={<Navigation />} />
			</Routes>
		</>
	);
}

export default App;
