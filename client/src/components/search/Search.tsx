import React from "react";
import { SearchProduct } from "../../actions/Search";
import { Input } from "./Style";

function Search() {
	const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		SearchProduct(e.target.value);
	};

	return (
		<Input placeholder={"Search"} onChange={onSearchHandler} name="search" />
	);
}

export default Search;
