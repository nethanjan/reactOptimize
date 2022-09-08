import React from "react";
import Search from "../search/Search";
import {
	Nav,
	NavbarInnerContainer,
	NavLogo,
	NavSearch,
	NavbarExtendedContainer,
} from "./Styles";

function Header() {
	return (
		<Nav>
			<NavbarInnerContainer>
				<NavLogo>Home24</NavLogo>
				<NavSearch>
					<Search />
				</NavSearch>
			</NavbarInnerContainer>
			<NavbarExtendedContainer />
		</Nav>
	);
}

export default Header;
