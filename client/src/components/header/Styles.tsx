import styled from "styled-components";

import { Container } from "../../Styles";

export const Nav = styled.nav`
	font-size: 18px;
	position: sticky;
	z-index: 999;
	height: 80px;
	background-color: rgba(0, 0, 0, 0);
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
`;

export const NavbarContainer = styled(Container)`
	justify-content: space-between;
	align-items: center;
	height: 80px;
	${Container};
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const NavLogo = styled.div`
	flex: 20%;
	display: flex;
	justify-content: flex-start;
	padding-left: 50px;
	padding-top: 10px;
	cursor: pointer;
	text-decoration: none;
	font-size: 2.5rem;
	font-weight: 800;
	transition: all 0.5s ease;
	&:hover {
		transform: scale(1.02);
	}
	@media (max-width: 700px) {
		padding-left: 10px;
		padding-right: 15px;
		font-size: 2rem;
	}
`;

export const NavSearch = styled.div`
	flex: 80%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 5%;
	text-decoration: none;
	font-size: 2.5rem;
	font-weight: 800;
`;

export const Input = styled.input`
	font-size: 18px;
	padding: 10px;
	margin: 10px;
	background: #cbe5ff;
	border: none;
	border-radius: 3px;
	::placeholder {
		color: #333e49;
	}
`;
