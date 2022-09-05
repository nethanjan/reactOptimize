import React from "react";
import styled from "styled-components";

import Header from "../../components/header/Header";

interface Props {
	children: any;
}

const Container = styled.div`
	min-height: calc(100vh - 88px);
`;

const PageTemplate = (prop: Props) => {
	return (
		<Container>
			<Header />
			{prop.children}
		</Container>
	);
};

export default PageTemplate;
