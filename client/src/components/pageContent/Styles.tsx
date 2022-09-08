import styled from "styled-components";

export const TitleWrap = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ArticleCard = styled.article`
	flex: 1 0 200px;
	box-sizing: border-box;
	margin: 1rem 0.25em;
	border: 1px solid #ccc;
	box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
	cursor: pointer;
`;

export const CardImage = styled.img`
	max-width: 100%;
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 20px 20px;
`;

export const ButtonWrapper = styled.p`
	display: flex;
	margin-top: auto;
`;

export const CardButton = styled.button`
	background: #111;
	border: 0;
	color: white;
	padding: 10px;
	width: 100%;
`;

export const Title = styled.h2`
	font-size: 1.2em;
	text-align: center;
`;
