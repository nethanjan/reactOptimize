import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 20px;
`;

export const TopLeft = styled.div`
	text-transform: uppercase;
	text-align: center;
`;

export const Bottom = styled.div`
	overflow-y: auto;
`;

export const UnorderedList = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	margin-right: 10px;
`;

export const LinkItem = styled.a`
	color: #000;
	text-decoration: none;
	padding: 10px 0;
	border-bottom: 1px solid #fdfdfd30;
	display: block;
	&:hover {
		background: #333;
		color: #fff;
	}
`;
