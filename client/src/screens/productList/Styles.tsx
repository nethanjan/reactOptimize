import styled from "styled-components";

export const PageContainer = styled.div`
	display: flex;
	height: 100%;
	padding: 20px;
`;

export const LeftColumn = styled.div`
	display: flex;
	min-height: 100%;
	flex-grow: 1;
	flex-direction: column;
	border-right: solid #48494a;
`;

export const RightColumn = styled.div`
	min-height: 100%;
	flex-grow: 9;
	padding: $largespace;
	margin-left: 20px;
`;

export const TopRight = styled.div`
	flex-shrink: 0;
	display: flex;
`;

export const Bottom = styled.div`
	flex-grow: 1;
	overflow-y: auto;
`;
