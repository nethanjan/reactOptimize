import React from "react";
import {
	Nav,
	NavbarInnerContainer,
	NavLogo,
	NavSearch,
	NavbarExtendedContainer,
	Input,
} from "./Styles";

function Header() {
	return (
		<Nav>
			<NavbarInnerContainer>
				<NavLogo>Home24</NavLogo>
				<NavSearch>
					<Input placeholder={"Search"} />
				</NavSearch>
			</NavbarInnerContainer>
			<NavbarExtendedContainer></NavbarExtendedContainer>
		</Nav>
	);
}

export default Header;
