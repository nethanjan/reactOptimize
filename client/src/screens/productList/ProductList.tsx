import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import PageTemplate from "../templates/PageTemplate";
import {
	PageContainer,
	LeftColumn,
	RightColumn,
	TopRight,
	Bottom,
} from "./Styles";

const ProductList = () => {
	return (
		<PageTemplate>
			<PageContainer>
				<LeftColumn>
					<Sidebar />
				</LeftColumn>
				<RightColumn>
					<TopRight>
						<h1>Product List</h1>
					</TopRight>
					<Bottom>Page Content</Bottom>
				</RightColumn>
			</PageContainer>
		</PageTemplate>
	);
};

export default ProductList;
